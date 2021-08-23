import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import {BtnUploadImg, Colors, UploadImgText} from "./Styles";
import {AntDesign} from "@expo/vector-icons";


function TakePicture({onSelectImage, unlinkPickedImage = false}) {
    // The path of the picked image
    const [pickedImagePath, setPickedImagePath] = useState('');

    // This function is triggered when the "Open camera" button pressed
    const openCamera = async () => {
        // Ask the user for the permission to access the camera
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this app to access your camera!");
            return;
        }

        const result = await ImagePicker.launchCameraAsync();

        if (!result.cancelled) {

            try {

                const {uri} = result

                setPickedImagePath(uri);

                let dataForm = new FormData();

                let fileType = uri.substring(uri.lastIndexOf(".") + 1);

                onSelectImage({
                    uri,
                    name: `photo.${fileType}`,
                    type: `image/${fileType}`
                })

                console.log(dataForm);

            } catch (e) {

                console.log(e)

            }

        }
    }
    const {green3} = Colors;

    useEffect(() => {
        if (unlinkPickedImage === true) {
            setPickedImagePath('')
        }
    }, [unlinkPickedImage])
    return (
        <View style={styles.screen}>
            <View>
                <BtnUploadImg onPress={openCamera}>
                    <AntDesign name='clouduploado' size={25} color={green3}/>
                    <UploadImgText>رفع صورة</UploadImgText>
                </BtnUploadImg>
            </View>
            <View style={styles.imageContainer}>
                {
                    pickedImagePath !== '' && <Image
                        source={{uri: pickedImagePath}}
                        style={styles.image}
                    />
                }
            </View>
        </View>
    );
}

export default TakePicture;


const styles = StyleSheet.create({
    screen: {},

    imageContainer: {
        padding: 15,
        alignSelf: 'center'
    },
    image: {
        width: 200,
        height: 300,
        resizeMode: 'cover'
    }
});