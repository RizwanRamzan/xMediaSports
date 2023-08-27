import React from "react"
import "./style.css"
import { MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";



const Header =(props)=>{

    const {setSideBr,sideBr ,setSideBrSub} =props

    return(
        <div className="header">
            <img width={"200px"} src="/image_2023_06_23T13_26_04_544Z.png" alt=".."/>
            <div className="memu-icon">
                {sideBr == 0 ?
                <MenuUnfoldOutlined onClick={()=>setSideBr(150)} style={{color:"#706F6F",fontSize:"25px"}}/>
                : <MenuFoldOutlined onClick={()=> {
                    setSideBr(0)
                    setSideBrSub(0)
                }}  style={{color:"#706F6F",fontSize:"25px"}}/>
                }
            </div>
            </div>
    )
}

export default Header