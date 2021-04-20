import React from 'react'
import { FlatList, RefreshControl, StyleSheet } from 'react-native'
import { View, Text, Icon, Button } from 'native-base'

const BreedList = (props) => {


    const goToBreed = (breed) => {
        props.navigation.push('Breed', {
            breed
        })
    }

    const updateList = () => {
        props.setPage(1)
        props.update()
    }

    const handleLoadMore = () => {
        props.setPage(props.page + 1)
    }

    const renderBreed = ({ item }) => {
        return (
            <View style={styles.breedView}>
                <Button onPress={() => goToBreed(item)} iconLeft transparent full bordered rounded>
                    <Icon name='dog-side' fontSize='30' type='MaterialCommunityIcons' />
                    <Text style={styles.textBreed}>{item}</Text>
                </Button>
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            <FlatList
                refreshControl={<RefreshControl colors={['blue', 'white']} refreshing={props.refreshing} onRefresh={updateList} />}
                removeClippedSubviews={true}
                keyExtractor={(_, index) => index}
                numColumns={1} data={props.data}
                renderItem={renderBreed}
                initialNumToRender={10}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.9}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    loading: {
        alignSelf: 'center',
        marginVertical: 20,
    },
    breedView: {
        flex:1,
        justifyContent:'center',
        padding: 10
    },
    textBreed: {
        fontSize: 15
    }
});



export default BreedList