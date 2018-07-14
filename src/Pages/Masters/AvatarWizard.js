import React from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import { Avatar } from './../../Components'
import noavatar from './../../assets/no-avatar.png'

class AvatarWizard extends React.Component {

    render() {
        // const btnText = this.props.photo === undefined ? 'Add Photo' : 'Change Photo'
        return (
            <Card>
                <CardHeader>
                    Avatar
                </CardHeader>
                <Avatar src={noavatar} />
                <CardBody>
                    {/*
                        TODO: change the input type='file' look, doc bellow 
                        https://dev.to/greduan/the-anatomy-of-a-custom-inputtypefile-component
                    */}
                    <input type="file" />
                </CardBody>
            </Card>
        )
    }
}

export default AvatarWizard