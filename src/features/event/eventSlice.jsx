import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const API_URL = import.meta.env.VITE_API_URL;


// Thunk for fetching events
export const fetchEvents = createAsyncThunk(
    'events/fetchEvents',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_URL}/api/event/getAllEvents`); // You can later use "/api/event/getAllEvents" with proxy
            //console.log("Fetch response:", response);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            //console.log("Fetched events data:", data);
            return data;
        } catch (err) {
            //console.error("Fetch events error:", err);
            return rejectWithValue(err.response?.data?.message || err.message);
        }
    }
);

// Event slice
const eventSlice = createSlice({
    name: "events",
    initialState: {
        events: [],
        loading: true,
        offline : false,
        error: null
    },
    reducers: {
        setEvents: (state, action) => {
            state.events = action.payload;
        },

        updateEvent: (state, action) => {
            const index = state.events.findIndex(event => event._id === action.payload._id);

            if (index !== -1) {
                state.events[index] = action.payload;
            } else {
                console.log("Event not found");
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
            .addCase(fetchEvents.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.offline = false;
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.loading = false;
                state.events = action.payload;
                state.error = null;
                state.offline = false;
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.loading = false;
                state.offline = true;
                state.error = action.payload;
            });
    }
});

// Export actions and reducer
export const { setEvents, updateEvent, setLoading, setError } = eventSlice.actions;
export default eventSlice.reducer;
