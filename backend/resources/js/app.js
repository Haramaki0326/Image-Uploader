import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Loader from './Loader';
import ButtonActions from './ButtonActions';
import Footer from './Footer';

import { ChakraProvider } from "@chakra-ui/react"
import { Flex, FormControl } from "@chakra-ui/react"
import Header from "./Header";

let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
// this.state = {
//     csrf_token: csrf_token
// }

const App = () => {
    return(
        <ChakraProvider>
            <BrowserRouter>
            <React.Fragment>
                <Flex direction="column" minH="100vh" textAlign='center'>
                    <Header />
                    <form method="POST" action="/input" encType="multipart/form-data">
                        <input type='hidden' name='_token' value={csrf_token} />
                        <FormControl w='100%' h='100%'>
                            <Loader />
                            <ButtonActions />
                        </FormControl>
                    </form>
                    <Footer />
                </Flex>
            </React.Fragment>
            </BrowserRouter>
        </ChakraProvider>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
