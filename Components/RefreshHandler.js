import React, {useCallback, useState} from "react";
import {KeyboardAvoidingView, Platform, RefreshControl, View} from "react-native";
import {FlatList} from 'react-native-gesture-handler'

const RefreshHandler = ({children, pullToRefresh}) => {

    const wait = timeout => {

        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    };

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => {
            setRefreshing(false)
           return pullToRefresh ?   pullToRefresh(true) : null ;
        });
    }, []);


    return (

        <FlatList
            keyExtractor={() => 'App-Init'}
            style={{width: '100%', height: '100%'}}
            removeClippedSubviews={false}
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={['#36970c']}
                />
            }
            nestedScrollEnabled={true}
            keyboardShouldPersistTaps='handled'

            data={[0]}
            renderItem={() =>

                    <View>
                    {children}
                    </View>

            }
        />


    )
}


export default RefreshHandler
