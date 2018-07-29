import React from 'react'
import { PhotoHolder, HorizontalDelimiter, VerticalDelimiter, FlexLaoyout } from 'components'
import {
    Button,
    Card,
    CardBody,
    CardHeader,
} from 'reactstrap'

class LogoWidget extends React.Component {

    state = {
        staticMode: false
    }

    toggleMode = () => this.setState({...this.state, staticMode: !this.state.staticMode})

    render() {
        return (
            <Card>
                <CardHeader>
                    Logo
                    {
                        !this.state.staticMode &&
                        <div className="card-header-actions">
                            <a className="card-header-action btn btn-setting" onClick={ () => this.toggleMode() }><i className="icon-settings"></i></a>
                        </div>
                    }
                </CardHeader>
                <CardBody>
                    <FlexLaoyout.Row>
                        <FlexLaoyout.Column>
                            <h4>32x32</h4>
                            <PhotoHolder title='32x32' width={64} height={64}/>
                        </FlexLaoyout.Column>
                        <VerticalDelimiter />
                        <FlexLaoyout.Column>
                            <h4>150x50</h4>
                            <PhotoHolder title='150x50'  width={128} height={64}/>
                        </FlexLaoyout.Column>
                        
                    </FlexLaoyout.Row>
                    <HorizontalDelimiter />
                    {
                        this.state.staticMode &&
                        <React.Fragment>
                            <Button color={'success'} size='sm'>
                                <i className="fa fa-check-square-o"></i>
                                <span className={'__left_mini_intend'}>32x32</span>
                            </Button>
                            <Button className={'__left_intended_item'} color={'danger'} size='sm'>
                                <i className='fa fa-ban'></i>
                                <span className={'__left_mini_intend'}>150x50</span>
                            </Button>
                        </React.Fragment>
                    }
                </CardBody>
            </Card>
        )
    }
}

export default LogoWidget
