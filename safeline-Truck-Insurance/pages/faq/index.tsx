import { NextPage } from "next";
import { Fragment, useState } from "react";
import { metaTags } from "@/constants/metaTags";
import { Container } from "@/componentns/Container";
import { AddIcon } from "@/public/assets/svgs/AddIcon";
import { Conditional } from "@/componentns/Conditional";
import { SectionTitle } from "@/componentns/SectionTitle";
import { RemoveIcon } from "@/public/assets/svgs/RemoveIcon";
import classes from './index.module.css';
import classNames from "classnames";
import Head from "next/head";

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
        setQuestions(questions.map((question, i) => ({
            ...question,
            isActive: index === i && Boolean(question.isActive) === false
        })));
    };

    return (
        <Fragment>
            <Head>{metaTags.faq}</Head>
            <section className={classes.faqSection} >
                <Container>
                    <SectionTitle position="center">
                        Frequently <span>Asked</span> Questions & <span>Answers</span>
                    </SectionTitle>
                    { questions.map((item, index) => (
                        <div
                            key={index}
                            className={classNames(classes.groupQuestion, {
                                [classes.activeQuestion]: item.isActive
                            })}
                        >
                            <div
                                className={classes.questionNode}
                                onClick={() => toogleQuestion(index)}
                            >
                                <p className={classes.questionMessage}>{item.question}</p>
                                <Conditional
                                    condition={item.isActive}
                                    fallback={() => <AddIcon />}
                                >
                                    <RemoveIcon />
                                </Conditional>
                            </div>
                            <Conditional condition={item.isActive}>
                                <div className={classes.answerNode}>
                                    <p>{item.answer}</p>
                                </div>
                            </Conditional>
                        </div>
                    ))}
                </Container>
            </section>
        </Fragment>
    );
};

export default Faq;