import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from 'reactstrap'
import { Avatar } from 'components'
import { noavatar } from 'assets'

class AvatarWizard extends React.Component {

    render() {
        // const btnText = this.props.photo === undefined ? 'Add Photo' : 'Change Photo'
        return (
            <Card>
                <CardHeader>
                    Avatar
                </CardHeader>
                
                <CardBody>
                    <Avatar src={noavatar} />    
                </CardBody>
                <CardFooter>
                    {/*
                        TODO: change the input type='file' look, doc bellow 
                        https://dev.to/greduan/the-anatomy-of-a-custom-inputtypefile-component
                    */}
                    <input type="file" />
                </CardFooter>
            </Card>
        )
    }
}

export default AvatarWizard