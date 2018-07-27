import React from 'react'
import { PhotoHolder, HorizontalDelimiter, VerticalDelimiter } from 'components'
import {
    Badge,
    Button,
    ButtonDropdown,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Fade,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label,
    Row,
    Media
} from 'reactstrap'

class LogoWidget extends React.Component {

    render() {
        return (
            <Card>
                <CardHeader>
                    Logo
                    {/*
                    <div className="card-header-actions">
                        <a className="card-header-action btn btn-setting" onClick={() => alert('settings clicked')}><i className="icon-settings"></i></a>
                    </div>
                    */}
                </CardHeader>
                <CardBody>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        <PhotoHolder title='32x32' width={64} height={64}/>
                        <VerticalDelimiter />
                        <PhotoHolder title='150x50'  width={128} height={64}/>
                    </div>
                    
                    <HorizontalDelimiter />
                    <Button color={'success'} size='sm'>
                        <i className="fa fa-check-square-o"></i>
                        <span className={'__left_mini_intend'}>32x32</span>
                    </Button>
                    <Button className={'__left_intended_item'} color={'danger'} size='sm'>
                        <i className='fa fa-ban'></i>
                        <span className={'__left_mini_intend'}>150x50</span>
                    </Button>
                </CardBody>

            </Card>

        )
    }
}

export default LogoWidget
