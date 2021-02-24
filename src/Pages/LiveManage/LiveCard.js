import React, { useState } from 'react'
import axios from 'axios'
import { Statistic, Row, Col, Button, Popconfirm,message } from 'antd';

function LiveCard(props) {
    const {userName, viewer, uid, i, delLiving} = props
    let handleClose = (e)=>{
        axios.get("http://localhost:7001/api/v2/lives/close").then(()=>{
            message.success(`you closed the living of ${userName}`);
            delLiving(i)
        })
    }
    
    return (
        <Row gutter={16}>
        <Col span={12}>
          <Statistic title="userName" value={userName} />
        </Col>
        <Col span={12}>
            <Statistic title="viewer" value={viewer} />
            <Popconfirm
                title="Are you sure to close this living?"
                onConfirm={handleClose}
                okText="Yes"
                cancelText="No"
            >
                <Button danger style={{ marginTop: 16 }} >
                    Close Living
                </Button>
            </Popconfirm>
            
        </Col>
        <Col span={12}>
            <Statistic title="uid" value={uid} groupSeparator="" />
        </Col>
      </Row>
    )
}

export default LiveCard
