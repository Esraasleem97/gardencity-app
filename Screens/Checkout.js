import React, {useEffect, useState} from "react";
import {Layout, Spinner} from "@ui-kitten/components";
import Header from "../Components/Header";
import {
    Button,
    ButtonText,
     FlexRow, ViewSelect
} from "../Components/Styles";
import Transactions from "../Components/Transactions";
import SelectDropDown from "../Components/SelectDropDown";
import ProductModals from "../Components/ProductModals";
import {CHECKOUT, TransactionsHandler} from "../Redux/Actions/transactionActions";
import {useDispatch, useSelector} from "react-redux";
import {CHECK_OUT} from "../Api";
import TransactionMessagesHandlerComponent from "../Components/transactionMessagesHandlerComponent";
import {Alert} from "react-native";



const Checkout = ({navigation, route}) => {

    const {params: {data: {stocks, projects, products}}} = route

    const tableHead = ['كود', 'بند', 'كمية', "طول", "عبوة", 'قطر', 'حذف'];

    const [product, setProduct] = useState(null);

    const setDefaultStock = stocks ? stocks.filter(stock => stock.guid === 'B34050DE-935F-4230-BD93-619D395C5268') : null

    const [stock, setStock] = useState(setDefaultStock && setDefaultStock[0] || null );

    const [project, setProject] = useState(null);

    const [takeTime, setTakeTime] = useState(null);

    const [modalQty, setModalQty] = useState(null);


    const [tableData, setTableData] = useState([]);

    const dispatch = useDispatch();

    const {transaction} = useSelector(state => state)

    const {loading, data, error} = transaction

    const handleOnSelectProduct = (val) => {
        return setProduct(val)
    }

    const handleOnSelectProject = (val) => {
        return setProject(val)
    }
    const handleOnSelectStock = (val) => {
        return setStock(val)
    }

    const handleOnSelectTakeTime = (val) => {
        return setTakeTime(val)
    }

    const handleSetTableData = (val) => {
        return setTableData(val)
    }

    const handleOnSelectModalQty = (val) => {
        return setModalQty(val)
    }

    const handleOnSelectScannedProduct = (val) => {
        return setProduct(val)
    }
    useEffect(() => {

        if (data && data.success) {
            setProduct(null)
            setStock(null)
            setProject(null)
            setTakeTime(null)
            setModalQty(null)
            setTableData([])
        }
    }, [data])


    const modalSubmitHandler =  () => {
        if (product && modalQty) {
             tableData.push
            ([
                product.code,
                product.name,
                modalQty,
                product.height,
                product.size,
                product.diameter,
                product
            ])
            setProduct(null)
            setModalQty(null)

        }else{
            return    Alert.alert('تنبيه' , "يجب ادخال الكمية و البند أولا")
        }

    }


    const submitHandler = () => {

        const products = tableData.map(item => Object.assign({
            id: item[0],
            name: item[1],
            quantity: item[2],
            guid: item[6].guid,
            code: item[6].code
        }))

        dispatch(TransactionsHandler({
            products: products,
            take_time: takeTime,
            stock: stock ? stock.guid : '',
            project: project ? project.guid : '',
            type: CHECKOUT,
            image: null

        }, CHECK_OUT, true))

    }


    return (
        <Layout>
            <Header title='الإخراج' navigation={navigation} onTop={
                loading
                    ?
                    <ButtonText>
                        <Spinner status='success' size='giant' style={{alignSelf: 'center'}}/>
                    </ButtonText>
                    :
                    <Button onPress={submitHandler}>
                        <ButtonText>حفظ</ButtonText>
                    </Button>
            }/>

            <TransactionMessagesHandlerComponent data={data} error={error}/>





            <Transactions tableHead={tableHead}
                          tableData={tableData}
                          takeTime={takeTime}
                          onSelectTakeTime={handleOnSelectTakeTime}
                          setTableData={handleSetTableData}
            >

                <FlexRow>
                    <ViewSelect>
                        <SelectDropDown title='اسم المشروع'
                                        items={projects}
                                        onSelectItem={handleOnSelectProject}
                                        selectedItem={project}

                        />
                    </ViewSelect>
                    <ViewSelect>
                        <SelectDropDown title='المستودع'
                                        items={stocks}
                                        onSelectItem={handleOnSelectStock}
                                        selectedItem={stock}
                                        style={{width: 100}}
                                        defaultValue={'المشتل'}
                        />
                    </ViewSelect>
                </FlexRow>
                {
                    <ProductModals
                        products={products}
                        handleOnSelectProduct={handleOnSelectProduct}
                        product={product}
                        modalQty={modalQty}
                        handleOnSelectModalQty={handleOnSelectModalQty}
                        modalSubmitHandler={modalSubmitHandler}
                        navigation={navigation}
                        handleOnSelectScannedProduct={handleOnSelectScannedProduct}

                    />
                }



            </Transactions>

        </Layout>
    )
}


export default Checkout;


