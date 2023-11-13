import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Button } from 'react-bootstrap';
import MeoMeoJs from '@mieuteacher/meomeojs'
import { doListAction } from './store/slices/dolist.slice';
import {Modal} from 'antd'
import Promise from './components/Promise';
import Api from './components/Api';
export default function App() {
  const dispatch = useDispatch()
  const doListStore = useSelector(state => state.doListStore);



  return (
    <div>
      {/* <h1>Do List</h1>
      <Button onClick={() => {
          Modal.confirm({
            title: 'Are you sure delete this item?',
            content: "ok!",
            okText: 'Yes',
            onOk: () => {
              dispatch(doListAction.addDo({
                id: Date.now() * Math.random(),
                title: window.prompt("New Do Name"),
                status: false,
                time: Date.now()
              }))
            }
          })
      }}>Add</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Time</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {
            doListStore.data?.slice().sort((a, b) => {
              console.log("ab", a.time, b.time)
              return Number(b.time) - Number(a.time)
            }).map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td onClick={() => {
                    Modal.confirm({
                      title: "Xac nhan bala?",
                      onOk: () => {
                        dispatch(doListAction.changeStatus(item.id))
                      }
                    })
                  }} style={{
                    textDecoration: item.status && "line-through"
                  }}>{item.title}</td>
                  <td>{MeoMeoJs.getDateInfo(item.time).day}</td>
                  <td>
                    <button onClick={() => {
                      if(window.confirm("xoa1 ok")) {
                        dispatch(doListAction.deleteDo(item.id))
                      }
                    }}>Delete</button>
                  </td>
                </tr> 
              )
            })
          }
        </tbody>
      </Table>
      <Promise/> */}
      <Api/>
    </div>
  )
}
