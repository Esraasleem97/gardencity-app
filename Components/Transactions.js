import React from "react";
import {DataTable} from "./DataTable";
import {
    Button, ButtonText,
    Container,
    Content,
    FormArea,
} from "./Styles";
import RefreshHandler from "../Components/RefreshHandler";
import Input from "../Components/Input";
import {Spinner} from "@ui-kitten/components";


const Transactions = ({
                            children,
                            tableHead,
                            tableData,
                            takeTime,
                            onSelectTakeTime,
                            setTableData,
                            submit,
                            loading,
                            ...props
                        }) => {


    return (
        <RefreshHandler>
            <Container>
                <Content>
                    <FormArea>
                        {children}

                        <DataTable tableHead={tableHead} tableData={tableData} setTableData={setTableData} {...props}/>

                        <Input
                            label='الوقت المستغرق'
                            icon='dashboard'
                            placeholder='00:00:00'
                            keyboardType='numeric'
                            value={takeTime}
                            onChangeText={onSelectTakeTime}
                        />
                        {
                            loading
                                ?
                                <ButtonText>
                                    <Spinner status='success' size='giant' style={{alignSelf: 'center'}}/>
                                </ButtonText>
                                :
                                <Button onPress={submit}>
                                    <ButtonText>حفظ</ButtonText>
                                </Button>
                        }

                    </FormArea>
                </Content>
            </Container>
        </RefreshHandler>

    )
}


export default Transactions;
