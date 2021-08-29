import {
    GET_ROOM_SUCCESS,
    GET_CLASS_ERROR,
    ADD_ROOM_SUCCESS,
    ADD_ROOM_ERROR,
    ADD_BOOKINGS_SUCCESS,
    ADD_BOOKINGS_ERROR
} from '../../types'

export default (state, action) => {
    switch (action.type) {
        case ADD_ROOM_SUCCESS:
            return {
                ...state,
                userAuth: true,
                user: action.payload,
            }
        case ADD_BOOKINGS_ERROR:
        case GET_CLASS_ERROR:
        case ADD_ROOM_ERROR:
            return {
                ...state,
                errors: action.payload,
            }
        case GET_ROOM_SUCCESS:
            return {
                ...state,
                get_room_data: action.payload
            }
        case ADD_BOOKINGS_SUCCESS:
            return {
                ...state,
                add_bookings_data: action.payload
            }

        default:
            return state
    }

}