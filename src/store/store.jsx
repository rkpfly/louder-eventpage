import { configureStore } from '@reduxjs/toolkit'
import EventsReducer from '../features/event/eventSlice'
import OffersReducer from '../features/offers/offerSlice'

const store = configureStore({
    reducer : {
        Events : EventsReducer,
        Offers : OffersReducer,
    }
});

export default store;