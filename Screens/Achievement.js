import React from "react";
import {Layout} from "@ui-kitten/components";
import Header from "../Components/Header";
import SelectDropDown from "../Components/SelectDropDown";
import Input from "../Components/Input";
import {Container, Content, FormArea} from "../Components/Styles";


const Achievement = ({navigation, route}) => {

    const { params: { data: { projects , products } } } = route

    return (
        <Layout>
            <Header title='الإنجازات' navigation={navigation}/>
            <Container>
                <Content>
                    <FormArea>
                        <SelectDropDown items={projects} title='المشروع'/>
                        <SelectDropDown items={products}/>
                        <Input
                            label='الكمية'
                            icon='form'
                            placeholder='ادخل الكمية هنا'
                            keyboardType='number-pad'
                        />
                    </FormArea>
                </Content>
            </Container>
        </Layout>
    )
}

export default Achievement;