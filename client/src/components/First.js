import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import GoaContext from '../context/goaContext/goaContext';
import Button from '@material-ui/core/Button';
import AuthContext from '../context/authContext/authContext'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

function First() {
    const classes = useStyles();
    const [selectedCheckinDate, setSelectedCheckinDate] = React.useState();
    const [selectedCheckoutDate, setSelectedCheckoutDate] = React.useState();
    const [state, setState] = useState({ show: false });
    // const [data1, setData1] = useState();

    const { show } = state
    const [members, setMembers] = React.useState();

    const { addRoom, add_room_data, getRoom, get_room_data, addBookings, add_bookings_data, deleteRoom, delete_room_data } = useContext(GoaContext)
    const { loginUser, userAuth, errors, checkavailablity_data, checkavailablity } = useContext(AuthContext)

    const handleDateChange = (event) => {
        setSelectedCheckinDate(event.target.value);

    };
    const handleDateChange2 = (event) => {
        setSelectedCheckoutDate(event.target.value);

    };
    const HandleChange = e => {
        setMembers(e.target.value)

    }
    useEffect(() => {
        checkavailablity()
        console.log(checkavailablity_data)
    }, [add_room_data, add_bookings_data, delete_room_data])



    const submit = e => {
        checkavailablity()
        // console.log(checkavailablity_data)
        // if (checkavailablity_data) {
        //     checkavailablity_data.forEach(ele => {
        //         if (ele.members == members) {
        //             var d = new Date(ele.check_in);
        //             var curr_date = d.getDate();
        //             var curr_month = d.getMonth() + 1; //Months are zero based
        //             var curr_year = d.getFullYear();

        //             var d1 = new Date(ele.check_out);
        //             var curr_date1 = d1.getDate();
        //             var curr_month1 = d1.getMonth() + 1; //Months are zero based
        //             var curr_year1 = d1.getFullYear();

        //             var d2 = new Date(selectedCheckinDate);
        //             var curr_date2 = d2.getDate();
        //             var curr_month2 = d2.getMonth() + 1; //Months are zero based
        //             var curr_year2 = d2.getFullYear();

        //             var d3 = new Date(selectedCheckoutDate);
        //             var curr_date3 = d3.getDate();
        //             var curr_month3 = d3.getMonth() + 1; //Months are zero based
        //             var curr_year3 = d3.getFullYear();

        //             var dateFrom = curr_date + "/" + curr_month + "/" + curr_year;
        //             var dateTo = curr_date1 + "/" + curr_month1 + "/" + curr_year1;
        //             var dateCheck = curr_date2 + "/" + curr_month2 + "/" + curr_year2;
        //             var checkOut = curr_date3 + "/" + curr_month3 + "/" + curr_year3;

        //             console.log(dateFrom)
        //             console.log(dateTo)
        //             console.log(dateCheck)


        //             var ad1 = dateFrom.split("/");
        //             var ad2 = dateTo.split("/");
        //             var c = dateCheck.split("/");

        //             // console.log(ad1)
        //             // console.log(ad2)
        //             // console.log(c)


        //             var from = new Date(ad1[2], parseInt(ad1[1]) - 1, ad1[0]);  // -1 because months are from 0 to 11
        //             var to = new Date(ad2[2], parseInt(ad2[1]) - 1, ad2[0]);
        //             var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);


        //             if (!ele.check_in && !ele.check_out) {

        //                 data1.push(ele)
        //                 console.log(data1)
        //             } else {
        //                 if ((check > from && check < to) == false && (dateFrom !== dateCheck && checkOut !== dateCheck) == true) {
        //                     data1.push(ele)
        //                 }
        //             }
        //         }

        //     });
        if (state.show == false) {
            setState(
                { show: true }
            )
        }

        // console.log(state)
        // console.log(selectedCheckinDate)
        // console.log(selectedCheckoutDate)
        // console.log(members)
        // console.log(data1)

        // getDatesBetweenDates()

        // }
    }


    return (
        <>
            <div class='text-left h-screen bg-fixed bg-cover bg-no-repeat text-white relative' style={{ backgroundImage: "url('/images/p1.jpg')" }}>
                <div className="text-center justify-center pt-72 space-y-10">
                    <h1 class="md:text-8xl text-5xl">Js</h1>
                    <h1 class="md:text-7xl font-medium text-2xl">Lorem ipsum dolor sit amet,<br></br>
                        consectetur adipiscing elit.</h1>
                    <h1 class="md:text-4xl text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                </div>
            </div>
            <div className=" bg-brand-ORANGE h-8 w-full"></div>
            <div className=" shadow-xl md:m-32 p-2 flex md:flex-col flex-col md:h-96 space-y-20 pt-20 bg-brand-GREY rounded-xl md:-mt-40 relative">
                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-4 w-auto">
                    <div className="flex flex-col md:justify-start justify-center md:items-start items-center mx-auto">
                        <div>
                            <h1 className=" text-2xl p-1 text-gray-600">Check In Date</h1>
                            <TextField
                                id="date"
                                label="Next appointment"
                                type="date"
                                format="MM/dd/yyyy"
                                name="CheckinDate"
                                className={classes.textField}
                                onChange={handleDateChange}
                                value={selectedCheckinDate}
                                defaultValue={selectedCheckinDate}
                                InputLabelProps={{
                                    shrink: true,
                                }} />
                        </div>
                    </div>
                    <div className="flex flex-col md:justify-start justify-center md:items-start items-center mx-auto">
                        <h1 className="text-2xl p-1 text-gray-600">Check Out Date</h1>
                        <div>
                            <TextField
                                id="date"
                                label="CheckoutDate"
                                type="date"
                                format="MM/dd/yyyy"
                                name="selectedDate"
                                className={classes.textField}
                                onChange={handleDateChange2}
                                value={selectedCheckoutDate}
                                defaultValue={selectedCheckoutDate}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-start md:items-start items-center mx-auto">
                        <h1 className="text-2xl p-1 text-gray-600">Members</h1>
                        <div>
                            <TextField id="standard-basic" label="Standard" onChange={HandleChange} name="mambers" value={members} />

                        </div>
                    </div>
                    <div className="flex flex-col justify-start md:items-start items-center mx-auto overflow-hidden">
                        <h1 className=" text-2xl p-1 text-gray-600">Check Availability</h1>
                        <div>
                            <Button onClick={submit}>Check Availability</Button>
                        </div>
                    </div>
                    {/* <div className="flex flex-row w-full text-2xl justify-center items-center pb-8">
                        <button onclick={submit} className=" bg-brand-GREEN text-white rounded-xl p-4 w-96 font-medium ">Check Availability</button>
                    </div> */}
                </div>
                <div>
                    {state.show == true ? checkavailablity_data && checkavailablity_data !== null ? checkavailablity_data.map(room => !room.check_in && !room.check_out && room.members == members ? <div>
                        <h1>Room name:{room.room_name}</h1> <br /> <h1>Members:{room.members}</h1> <br />
                        <h1>Rent:1000</h1>




                    </div> : '') : '' : ''}
                    {state.show == true ? checkavailablity_data && checkavailablity_data !== null ? checkavailablity_data.find(room => !room.check_in && !room.check_out && room.members == members) ? '' : <div>
                        <h1>Rooms not Available</h1>



                    </div> : '' : ''}
                </div>
            </div>
        </>

    )
}

export default First
