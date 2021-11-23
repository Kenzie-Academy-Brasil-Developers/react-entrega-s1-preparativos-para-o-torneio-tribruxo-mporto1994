
import { useForm } from "react-hook-form";
import {useState} from "react";
import {Students} from './styles';
import {StudentSorted1} from './styles';
import {StudentSorted2} from './styles';
import {StudentSorted3} from './styles';
import {Page} from './styles';

const Student = ({list}) => {
    const [click, setClick] = useState(false)
    const [stuList,setStuList]=useState()
    const [newList,setNewList]=useState(list)
    const {register, handleSubmit} = useForm()

    console.log(list)

    const studentsImages = list.filter((student)=>student.image!="")
    // setNewList(newList.filter((student)=>student.image!=""))
    // return newList
    
    
    // console.log(studentsImages)

    const randomGen = () =>{
        return (Math.floor(Math.random()*studentsImages.length))
      }
      
    const myWizardIndex = () => {
    let ranList=[]
    for (let i=0; i<3;i++){
        const ran =randomGen()
        if (ranList.find((current)=>current===ran)){
            console.log("Estudante já existente",ran)
            i--
        }
        else{
        ranList.push(ran)
        }
    }
    // console.log(ranList)
    return ranList
    }
    const listDone=myWizardIndex()
    const chooseStudents = () => {
        const listDone=myWizardIndex()
        setNewList(listDone)

        const stuu = studentsImages
        setStuList(stuu)
        
        // console.log(stuList)
        // console.log(newList +"antes do while")

        // while (list[newList[0]].house != list[newList[1]].house != list[newList[2]].house){
        
        //     setNewList(myWizardIndex())
        //     console.log(newList)
        // }

        // const ranList = myWizardIndex()
        // console.log(stuList)
        // console.log(stuList[newList[1]])
        // console.log(list[newList[2]])
        // list[ranList[1]].house
        // list[ranList[2]].house
    }

    // chooseStudents()

    // const test = () => {
    //     setNewList(myWizardIndex())
    //     console.log(newList)
    // }
    const houseColor = (house) => {
        let color = ""
        switch (house){
            case "Gryffindor":
                color = "#C91208"
            case "Slytherin" :
                color = "#045908"
            case "Hufflepuff" :
                color = "#CFB404"
            case "Ravenclaw" :
                color = "#1C7ED4"
        }
        return color
    }       

    return(
        <Page>
            
            <Students>
                {click && <StudentSorted1 house={list[listDone[0]].house}>
                    {/* {newList.map((item)=>(<p>{item}</p>))} */}
                    {/* {console.log(stuList)} */}
                    <img src={list[listDone[0]].image}/>
                    <p>{list[listDone[0]].name}</p>
                    <p>{list[listDone[0]].house}</p>
                    <p>{list[listDone[0]].gender}</p>
                    </StudentSorted1>}
                {click && (<StudentSorted2 house={houseColor(list[listDone[1]].house)}>
                    <img src={list[listDone[1]].image}/>
                    <p>{list[listDone[1]].name}</p>
                    <p>{list[listDone[1]].house}</p> 
                    <p>{list[listDone[1]].gender}</p>
                </StudentSorted2>)}
                {click && (<StudentSorted3 house={list[listDone[2]].house}>
                    <img src={list[listDone[2]].image}/>
                    <p>{list[listDone[2]].name}</p>
                    <p>{list[listDone[2]].house}</p>
                    <p>{list[listDone[2]].gender}</p>
                </StudentSorted3>)}
                
            </Students>
            <button onClick={()=>{setClick(true);chooseStudents()}}>Vai</button>
        </Page>
        
    )
}
export default Student