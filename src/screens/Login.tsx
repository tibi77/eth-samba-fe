// import { Button, Typography } from "@mui/material";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from '../components/Button';
import styled from '@emotion/styled';

export const BrutalCard = styled.div`
    background-color: white;
    border-radius: 0.5rem;
    border: 3px solid black;
    filter: drop-shadow(7px 7px 0 rgb(0 0 0 / 1));
    transition: all;
    padding: 1rem;
  `;

export const Login = () => {
    // const [addressState, setAddressState] = useState();
    const navigate = useNavigate();

    async function connectToFuel(user: any) {
        navigate("/user/start-up")
        if (!user.isAuthenticated) return // Maybe show an err as well
        if (user.isStartup)
            navigate("/user/start-up")
        else
            navigate("/user/crowd-founding")

        // TODO Connect to fuel and setAddressState
    }
    console.log("login")
    return (
        <div style={{
            display: "grid", placeItems: "center"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
            }}>
                {/* This shit might jump around */}
                {/* <Typography variant="h3" style={{
                    textAlign: "center"
                }}></Typography>
                <Typography style={{
                    textAlign: "center"
                }}></Typography> */}
                <BrutalCard style={{
                    display: "grid",

                }}>
                    <h3 className='poppins text-lg md:text-xl text-center'>Fuel.Me</h3>
                    <h4 className='poppins text-lg md:text-xl text-center'>Fuel early staged Web3 startups and ideas</h4>
                    <br />
                    <Button text="Connect Wallet" onClick={connectToFuel} />
                </BrutalCard>
                {/* <Button onClick={connectToFuel}>
                    Connect Wallet
                </Button> */}
            </div>
        </div>
    );
}
