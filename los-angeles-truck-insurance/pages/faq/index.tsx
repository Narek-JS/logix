import { NextPage } from "next";
import { Fragment, useState } from "react";
import { metaTags } from "@/constants/metaTags";
import { Container } from "@/componentns/Container";
import { AddIcon } from "@/public/assets/svgs/AddIcon";
import { Conditional } from "@/componentns/Conditional";
import { YoutubChanel } from "@/pagesComponents/YoutubChanel";
import Head from "next/head";
import classNames from "classnames";
import classes from './index.module.css';

interface IQuestionData {
    question: string;
    answer: string;
    isActive?: boolean;
};

const testData = [
    {
        question: 'Lorem ipsum dolor sit amet consectetur ?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, placeat? Voluptas nihil labore est ad minus, asperiores eius iste quaerat assumenda enim voluptate reprehenderit voluptates perspiciatis optio velit rerum fugit.'   
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur ?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, placeat? Voluptas nihil labore est ad minus, asperiores eius iste quaerat assumenda enim voluptate reprehenderit voluptates perspiciatis optio velit rerum fugit.'   
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur ?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, placeat? Voluptas nihil labore est ad minus, asperiores eius iste quaerat assumenda enim voluptate reprehenderit voluptates perspiciatis optio velit rerum fugit.'   
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur ?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, placeat? Voluptas nihil labore est ad minus, asperiores eius iste quaerat assumenda enim voluptate reprehenderit voluptates perspiciatis optio velit rerum fugit.'   
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur ?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, placeat? Voluptas nihil labore est ad minus, asperiores eius iste quaerat assumenda enim voluptate reprehenderit voluptates perspiciatis optio velit rerum fugit.'   
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur ?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, placeat? Voluptas nihil labore est ad minus, asperiores eius iste quaerat assumenda enim voluptate reprehenderit voluptates perspiciatis optio velit rerum fugit.'   
    },
    {
        question: 'Lorem ipsum dolor sit amet consectetur ?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, placeat? Voluptas nihil labore est ad minus, asperiores eius iste quaerat assumenda enim voluptate reprehenderit voluptates perspiciatis optio velit rerum fugit.'   
    },
];

const Faq: NextPage = () => {
    const [ questions, setQuestions ] = useState<Array<IQuestionData>>(testData);
    
    const toogleQuestion = (index: number) => {
        setQuestions(questions.map((question, index_) => ({
            ...question,
            isActive: index === index_ && !question.isActive
        })));
    };

    return (
        <Fragment>
            <Head>{metaTags.faq}</Head>
            <section className={classes.faqSection} >
                <Container>
                    <div className={classes.faqContent}>
                        { questions.map((item, index) => (
                            <div
                                className={classNames(classes.groupQuestion, {
                                    [classes.activeQuestion]: item.isActive
                                })}
                                key={index}
                            >
                                <div
                                    className={classes.questionNode}
                                    onClick={() => toogleQuestion(index)}
                                >
                                    <p className={classes.questionMessage}>{item.question}</p>
                                    <AddIcon remove={item.isActive}/>
                                </div>
                                <Conditional condition={item.isActive}>
                                    <div className={classes.answerNode}>
                                        <p>{item.answer}</p>
                                    </div>
                                </Conditional>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
            <YoutubChanel />
        </Fragment>
    );
};

export default Faq;