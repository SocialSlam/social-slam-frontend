import React from 'react'
import {useParams} from 'react-router-dom'
import {Layout} from '../components/Layout'
import Jitsi from "../components/Jitsi";
import {Box, Flex} from "rebass";
import {shallowEqual, useSelector} from "react-redux";
import {CombinedReducer} from "../redux/Reducer";
import {AuthState} from "../redux/auth/AuthReducer";

export type StreamProps = unknown

export type StreamParams = {
    streamId: string
}

export const SlamStream: React.FC<StreamProps> = (props) => {
    const {streamId} = useParams<StreamParams>()

    const auth = useSelector<CombinedReducer, AuthState>(
        (state) => state.authReducer,
        shallowEqual
    )

    return (
        <Layout>
            <Flex>

            </Flex>
            <Flex mx={5}>
                <Box width={3 / 5}>
                    <Jitsi roomName={'social-slam-test'} userInfo={{
                        email: auth.email,
                        displayName: auth.email
                    }} />

                    <Flex>
                        <Box></Box>
                    </Flex>
                </Box>
                <Box width={2 / 5}>

                </Box>
            </Flex>
        </Layout>
    )
}
