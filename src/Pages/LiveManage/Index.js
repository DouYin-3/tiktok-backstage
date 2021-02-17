import React,{useState, useEffect} from 'react'
import { Card, Col, Row } from 'antd';
import axios from 'axios';
import LiveCard from "./LiveCard";

function Index() {
    const [liveList, setLiveList] = useState([])
    useEffect(()=>{getLiveList()},[])
    const getLiveList = ()=>{
        axios.get("http://rap2api.taobao.org/app/mock/260656/tiktok/userList").then(res=>{
            setLiveList(res.data.list)
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
                                <Card title={item.name} >
                                    <LiveCard userName={item.userName} viewer={item.viewer} uid={item.uid} delLiving={delLiving} i={index} />
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
