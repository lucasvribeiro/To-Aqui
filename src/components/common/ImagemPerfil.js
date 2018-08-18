import React, {Component} from 'react';
import { Platform, View, StyleSheet, Image } from 'react-native';

export default class ImageProfile extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        if(this.props.imagePath) {
            return (
                <View stule={{ backgroundColor: '#eee' }}>
                    <Image source={this.props.imagePath} style={styles.profileStyle} />
                </View>
            )
        } else {
            return (
                <View>
                    <Image source={require('./../../../images/userProfile.png')} style={styles.profileStyle} />                    
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    profileStyle: {
        width: 140,
        height: 140,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#fff',
    }
});

export { ImageProfile };
