import {useState} from 'react'
import Closed from '../images/closed.svg'
import Opened from '../images/opened.svg'

function FAQ() {
    const [selected, setSelected] = useState(null)
    const toggle = (index) => {
        // if faq toggle is clicked, close it
        if (selected === index) {
            return setSelected(null)
        }
        // why? because you're setting the default property to already opened
        setSelected(index)
    }
    return (
        <>
            <div className="faq-contain">
                <div className="right-contain">
                    <h1>Frequently asked <span>questions</span></h1>
                    <p>Want to chat? Shoot us a message!</p>
                </div>
               <div className="faq-items">
                    {/* map from the 'questions' dataset  */}
                    {/* turn into jsx with () instead of {} */}
                    {/* map each individual faq question */}
                    {questions.map((item, index) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="item" >
                            {/* on click, run function with selected === index */}
                            <div className="faq-title" onClick={() => toggle(index)}>
                                <p>{item.question}</p>
                                <img src={selected === index ? Opened  : Closed } alt="" />
                                {console.log(selected === index ? 'Opened' : 'Closed')}
                            </div>
                            <div className={selected === index ? 'show' : 'content'}>
                                <p>{item.answer}</p>
                            </div>
                            
                            {console.log(selected === index ? 'show' : 'content')}
                        </div>
                    ))}
                </div> 
            </div>
        </>
    )
}
// data set of questions
const questions = [
    {
        question: 'What do we do?',
        answer:
            'Voicewise is an all-in-one resource, opportunity, and learning hub for ambitious high school students. We offer personalized course selections, mentorship/advice, and a selected database of opportunities.',
    },
    {
        question: 'Why should I use this platform?',
        answer:
            'All resources are tailored to high school students, whereas most other courses and self improvement platforms have a very broad audience. We are also a platform made by teens so we are more in-the-knows of what the current education system feels like. ',
    },
    {
        question: 'Is everything free?',
        answer:
            'Yes!! No paid courses. Ever. We believe in free , open source learning. We will never make you pay for anything',
    },
    {
        question: 'Where can I get advice?',
        answer:
            'You can join our discord (currently under construction) or contact any of the board members through our socials! We are currently creating more communication channels so look out for that.',
    },

]


export default FAQ