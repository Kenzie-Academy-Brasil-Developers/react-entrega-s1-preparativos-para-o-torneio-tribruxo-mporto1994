
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

    // console.log(list)

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
    let listDone=myWizardIndex()

    const chooseStudents = () => {
        const stuu = studentsImages
        setStuList(stuu)

        let allDif = false
        console.log(listDone)
        console.log(stuu)
        while(allDif===false){
            listDone=myWizardIndex()
            console.log(stuu[listDone[0]].house)
            console.log(stuu[listDone[1]].house)
            if(stuu[listDone[0]].house!=stuu[listDone[1].house]){
                allDif=true
            }
        }
        
        

        console.log(listDone)



        setNewList(listDone)
        
        console.log(stuu)
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
                color = "201,18,8"
                break;
            case "Slytherin" :
                color = "4,89,8"
                break;
            case "Hufflepuff" :
                color = "207,180,4"
                break;
            case "Ravenclaw" :
                color = "28,126,212"
                break;
        }
        return color
    }       

    return(
        <Page>
            
            <Students>
                {click && <StudentSorted1 house={houseColor(list[listDone[0]].house)}>
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
                {click && (<StudentSorted3 house={houseColor(list[listDone[2]].house)}>
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