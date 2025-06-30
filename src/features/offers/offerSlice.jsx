import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOffers = createAsyncThunk(
    'offers/fetchOffers',
    async (_, { rejectWithValue }) => {
        const API_URL = import.meta.env.VITE_API_URL;
        try {
            const response = await fetch(`${API_URL}/api/offers/all-offers`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || err.message);
        }
    }
);

const offerSlice = createSlice({
    name : "offers",
    initialState : {
        offers : [],
        loading : true,
        offline : false,
        error : null,
    },
    reducers : {
        setOffers: (state, action) => {
            state.offers = action.payload;
        },

        updateOffer: (state, action) => {
            const index = state.offers.findIndex(offer => offer._id === action.payload._id);

            if (index !== -1) {
                state.offers[index] = action.payload;
            } else {
                console.log("Offer not found");
            }
        },

        setLoading: (state, action) => {
            state.loading = action.payload;
        },

        setError: (state, action) => {
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOffers.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.offline = false;
            })
            .addCase(fetchOffers.fulfilled, (state, action) => {
                state.loading = false;
                state.offers = action.payload;
                state.error = null;
                state.offline = false;
            })
            .addCase(fetchOffers.rejected, (state, action) => {
                state.loading = false;
                state.offline = true;
                state.error = action.payload;
            });
    }
});

export default offerSlice.reducer;
export const { setOffers, updateOffer, setLoading, setError } = offerSlice.actions;
