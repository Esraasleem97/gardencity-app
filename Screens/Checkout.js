import React, {useState} from "react";
import {Layout, Button as ButtonUI} from "@ui-kitten/components";
import Header from "../Components/Header";
import SelectDropDown from "../Components/SelectDropDown";

import {DataTable} from "../Components/DataTable";
import {
    Button,
    ButtonText,
    ButtonAdd,
    Colors,
    Container,
    Content,
    FlexEnd,
    FormArea,
    FlexRow
} from "../Components/Styles";
import RefreshHandler from "../Components/RefreshHandler";
import {items} from "../DummyData";
import {Feather, FontAwesome} from "@expo/vector-icons";
import Input from "../Components/Input";

import {Modals} from "../Components/Modals";
import {StyleSheet} from "react-native";

const {white, red} = Colors


const Checkin = ({navigation}) => {
    const [visible, setVisible] = React.useState(false);

    const tableHead = ['البند', 'الكمية', 'الاجراء'];

    const [tableData, setTableData] = useState([
        ['1', '2', <FontAwesome onPress={() => removeRow(0)} name='times' color={red} style={{textAlign: 'center'}}/>],
        ['2', 'b', <FontAwesome onPress={() => removeRow(1)} name='times' color={red} style={{textAlign: 'center'}}/>],
        ['3', '2', <FontAwesome onPress={() => removeRow(2)} name='times' color={red} style={{textAlign: 'center'}}/>],
        ['4', 'b', <FontAwesome onPress={() => removeRow(3)} name='times' color={red} style={{textAlign: 'center'}}/>]
    ]);


    const removeRow = (id) => {
        setTableData([...tableData, tableData.splice(id, 1)[1]])
    };


    return (
        <Layout>
            <Header title='الأخراج' navigation={navigation}/>
            <RefreshHandler>
                <Container>
                    <Content>
                        <FormArea>
                            <SelectDropDown title='أسم المشروع' items={items}/>
                            <SelectDropDown title='المستودع' items={items}/>
                            <FlexEnd>

                                <ButtonAdd onPress={() => setVisible(true)}>
                                    <Feather name='plus' size={15} color={white}/>
                                    <ButtonText>إضافة</ButtonText>
                                </ButtonAdd>
                            </FlexEnd>

                            <DataTable tableHead={tableHead} tableData={tableData}/>
                            <Input
                                label='الوقت المستغرق'
                                icon='dashboard'
                                placeholder='00:00:00'
                            />
                            <Button>
                                <ButtonText>حفظ</ButtonText>
                            </Button>
                        </FormArea>
                        <Modals
                            visible={visible}
                            setVisible={setVisible}
                        >
                            <SelectDropDown title='البند' items={items}/>
                            <Input
                                label='الكمية'
                                icon='form'
                                placeholder='الكمية'
                            />

                            <FlexRow>
                                <ButtonUI onPress={() => setVisible(false)} status='success' style={styles.button}>
                                    حفظ
                                </ButtonUI>
                                <ButtonUI onPress={() => setVisible(false)} status='basic' style={styles.button}>
                                    إلغاء
                                </ButtonUI>
                            </FlexRow>

                        </Modals>
                    </Content>
                </Container>
            </RefreshHandler>
        </Layout>
    )
}


export default Checkin;

const styles = StyleSheet.create({
    button: {
        margin: 2,
    },
});
