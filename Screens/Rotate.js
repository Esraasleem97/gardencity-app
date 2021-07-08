import React from "react";
import {Layout} from "@ui-kitten/components";
import Header from "../Components/Header";
import RefreshHandler from "../Components/RefreshHandler";
import {Button, ButtonText, Container, Content, FlexStyled, FormArea, Line} from "../Components/Styles";
import SelectDropDown from "../Components/SelectDropDown";
import Input from "../Components/Input";
import {items} from "../DummyData";



const Rotate = ({navigation}) => {

    return (
        <Layout>
            <Header title='التدوير' navigation={navigation}/>
            <RefreshHandler>
                <Container>
                    <Content>
                        <FormArea>
                            <SelectDropDown items={items} title='البند القديم' style={{fontSize:20}}/>
                            <Input
                                label='الكمية الموجودة'
                                icon='form'
                                placeholder='ادخل الرقم هنا'
                            />

                            <Input
                                label='الكمية'
                                icon='form'
                                placeholder='الكمية'
                            />
                            <Line/>
                            <SelectDropDown items={items} title='البند الجديد' style={{fontSize:20}}/>
                            <Input
                                label='الكمية'
                                icon='form'
                                placeholder='ادخل الرقم هنا'

                            />
                            <FlexStyled >
                                <Input
                                    label='الطول'
                                    icon='form'
                                    placeholder='الطول'
                                />
                                <Input
                                    label='الحجم'
                                    icon='form'
                                    placeholder='الحجم'
                                />
                                <Input
                                    label='القطر'
                                    icon='form'
                                    placeholder='القطر'
                                />

                            </FlexStyled>
                            <Input
                                label='الوقت المستغرق'
                                icon='dashboard'
                                placeholder='00:00:00'
                            />
                            <Button>
                                <ButtonText>حفظ</ButtonText>
                            </Button>
                        </FormArea>
                    </Content>
                </Container>
            </RefreshHandler>
        </Layout>
    )
}
export default Rotate;