import React, {useEffect} from 'react';
import {Layout, Spinner} from "@ui-kitten/components";
import {
    Container,
    Grid,
    ImageBackground,
    Card,
    CardImage,
    CardText
} from "../Components/Styles";
import RefreshHandler from "../Components/RefreshHandler";
import Header from "../Components/Header";
import {productsListHandler} from "../Redux/Actions/productActions";
import {useDispatch, useSelector} from "react-redux";
import {projectsListHandler} from "../Redux/Actions/projectActions";
import {stocksListHandler} from "../Redux/Actions/stockActions";
import {suppliersListHandler} from "../Redux/Actions/supplierActions";

const data = [
    {id: 0, title: 'الإدخال', img: require('../assets/checkin.png'), nav: 'Checkin'},
    {id: 1, title: 'الإخراج', img: require('../assets/checkout.png'), nav: 'Checkout'},
    {id: 2, title: 'الإنجازات', img: require('../assets/ach.png'), nav: 'Achievement'},
    {id: 3, title: 'زراعة البذور', img: require('../assets/seeding.png'), nav: 'Seed'},
    {id: 4, title: 'التعقيل', img: require('../assets/taq.png'), nav: 'Taeqil'},
    {id: 5, title: 'التعشيب', img: require('../assets/ta3sheeb.png'), nav: 'Weed'},
    {id: 6, title: 'تقليم أو نقل', img: require('../assets/transform.png'), nav: 'TrimMove'},
    {id: 7, title: 'التدوير', img: require('../assets/rotate.png'), nav: 'Rotate'},
    {id: 8, title: 'النقل بين المشاتل', img: require('../assets/plant.png'), nav: 'Transfer'},
]


const Home = ({navigation}) => {

    const dispatch = useDispatch()

    const {productsList, projectsList, stocksList, suppliersList} = useSelector(state => state);

    const {suppliers, supplierLoading} = suppliersList

    const {products, productLoading} = productsList

    const {projects, projectLoading} = projectsList

    const {stocks, stockLoading} = stocksList


    // console.log(
    //     'supplierLoading', supplierLoading,
    //     'productLoading', productLoading,
    //     'projectLoading', projectLoading,
    //     'stockLoading', stockLoading
    // )

    useEffect(() => {
        dispatch(productsListHandler())
        dispatch(projectsListHandler())
        dispatch(stocksListHandler())
        dispatch(suppliersListHandler())
    }, [])


    return (

        <Layout>
            <ImageBackground source={require('../assets/bg-plants6.jpg')}>
                <Header title='الصفحة الرئيسية'/>
                <RefreshHandler>
                    <Container>
                        <Grid>
                            {!supplierLoading && !productLoading && !projectLoading && !stockLoading
                                ?  data.map((item) => {
                                    return (
                                        <Card key={item.id} onPress={() => {
                                            navigation.navigate(`${item.nav}`)
                                        }}>
                                            <CardImage resizeMode='contain' source={item.img}/>
                                            <CardText>{item.title}</CardText>
                                        </Card>
                                    )
                                })
                                : <Spinner size='large' status='success'/>
                            }
                        </Grid>
                    </Container>
                </RefreshHandler>
            </ImageBackground>

        </Layout>


    );

}


export default Home;