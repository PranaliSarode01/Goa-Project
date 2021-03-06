import {
    GET_ROOM_SUCCESS,
    GET_CLASS_ERROR,
    ADD_ROOM_SUCCESS,
    ADD_ROOM_ERROR,
    ADD_BOOKINGS_SUCCESS,
    ADD_BOOKINGS_ERROR,
    DELETE_ROOM_SUCCESS,
    DELETE_ROOM_ERROR,
    CLR_ERROR
} from '../../types'

export default (state, action) => {
    switch (action.type) {
        case ADD_ROOM_SUCCESS:
            return {
                ...state,

                add_room_data: action.payload,
            }
        case DELETE_ROOM_ERROR:
        case ADD_BOOKINGS_ERROR:
        case GET_CLASS_ERROR:
            console.log(action.payload)
            return {
                ...state,
                errors: action.payload,
            }
        case ADD_ROOM_ERROR:
            console.log(action.payload)
            return {
                ...state,
                add_room_error: action.payload,
            }
        case CLR_ERROR:

            return {
                ...state,
                add_room_error: null,
            }
        case GET_ROOM_SUCCESS:

            return {
                ...state,
                get_room_data: action.payload
            }
        case ADD_BOOKINGS_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                add_bookings_data: action.payload
            }
        case DELETE_ROOM_SUCCESS:
            return {
                ...state,

                delete_room_data: action.payload,
            }


        default:
            return state
    }

}