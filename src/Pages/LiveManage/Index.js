import React,{useState, useEffect} from 'react'
import { Card, Col, Row } from 'antd';
import axios from 'axios';
import LiveCard from "./LiveCard";

function Index() {
    const [liveList, setLiveList] = useState([])
    useEffect(()=>{getLiveList()},[])
    const getLiveList = ()=>{
        axios.get("http://localhost:7001/api/lives").then(res=>{
            setLiveList(res.data.list)
            // console.log(res.data.list)
        })
    }
    let delLiving = (i)=>{
        liveList.splice(i,1)
        setLiveList([...liveList])
    }
    return (
        <div className="site-card-wrapper">
            <Row gutter={[16,16]}>
                {
                    
                    liveList.map((item,index)=>{
                        return(
                            <Col key={index} span={8}>
                                <Card title={item.description} >
                                    <LiveCard userName={item.author} viewer={item.likes} uid={item.id} delLiving={delLiving} i={index} />
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default Index
