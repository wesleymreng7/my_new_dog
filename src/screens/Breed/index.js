import React, { useEffect, useState } from 'react'
import { View, Icon, Button, Left, Body, Right, Header, Container, Title, Text } from 'native-base'
import { StyleSheet } from 'react-native'
import Gallery from 'react-native-image-gallery'
import { saveFile } from '../../utils/files'
import { getBreed } from '../../api'

const Breed = (props) => {
    const { breed } = props.route.params
    const [images, setImages] = useState([])
    const [index, setIndex] = useState(0)

    const getBreedImages = async () => {
        const images = await getBreed(breed)
        const breedImages = images.map((img, i) => {
            return { source: { uri: img, caption: i } }
        })
        setImages(breedImages)
    }


    const onChangeImage = (index) => {
        setIndex(index)
    }

    const saveImage = async () => {
        try {
            const res = await saveFile(images[index].source.uri)
            alert('Imagem salva na galeria')
        } catch (e) {
            console.log(e.message)
        }


    }
    useEffect(() => {
        getBreedImages()
    }, [])
    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={() => props.navigation.goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>{breed}</Title>
                </Body>
                <Right >
                    <Button transparent onPress={saveImage}>
                        <Icon name='save' />
                    </Button>
                </Right>
            </Header>
            <View style={styles.container}>
                <Gallery style={styles.gallery}
                    images={images}
                    onPageSelected={onChangeImage}
                    initialPage={0}
                />
                <View style={styles.counterView}>
                    <Text style={styles.counterText}>{index + 1} / {images.length}</Text>
                </View>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    gallery: {
        flex: 1,
        backgroundColor: 'black'
    },
    counterView: {
        top: 0, 
        height: 65, 
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        width: '100%', 
        position: 'absolute', 
        justifyContent: 'center'
    },
    counterText: {
        textAlign: 'right', 
        color: 'white', 
        fontSize: 15, 
        fontStyle: 'italic', 
        paddingRight: '10%'
    }
})

export default Breed