import RNFS from 'react-native-fs'

export const saveFile = async (url) => {
    try {
        const urlSplit = url.split('/')
        await RNFS.downloadFile({
            fromUrl: url,
            toFile: `${RNFS.PicturesDirectoryPath}/${urlSplit[urlSplit.length - 1]}`,
            background: true,
            cacheable: false,
            progressDivider: 1,
            connectionTimeout: 300000,
            readTimeout: 300000,
        })
    } catch (e) {
        console.log(e)
    }
}