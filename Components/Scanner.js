import {BtnScan, BtnSearch, ButtonText, Scan} from "./Styles";
import {AntDesign} from "@expo/vector-icons";
import React from "react";

const Scanner = ({
                     children,
                     navigation,
                     products,
                     handler
                 }) => {

    return (
        <Scan>
            {children}
            <BtnSearch style={{marginTop: 26}}
                     onPress={() => navigation.navigate('Scanner', {
                         products,
                         handler
                     })
                     }
            >
                <ButtonText>
                    <AntDesign name='search1' size={20}/>
                </ButtonText>

            </BtnSearch>
        </Scan>
    );
}





export default Scanner