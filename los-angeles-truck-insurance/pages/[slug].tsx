import { NextPage } from "next";
import { useRouter } from "next/router";
import { useGetDynamicDataQuery } from "@/store/dynamicData";
import { Redirect } from "@/componentns/Redirect";
import { Post } from "@/pagesComponents/Post";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setLoading } from "@/store/loading";
import NotFound from "./404";

const Page: NextPage = () => {
    const { query: { slug } } = useRouter();
    const dispatch = useAppDispatch();

    const { isLoading, data, error } = useGetDynamicDataQuery(String(slug), {
        skip: !(Boolean(slug) && String(slug) !== 'undefined')
    });

    useEffect(() => {
        dispatch(setLoading(isLoading));
    }, [isLoading]);

    if(error) return <Redirect to="/404"/>

    if(data?.data?.post?.category.name === 'Blogs') return <Post category="blogs" data={data.data}/>;

    if(data?.data?.post?.category.name === 'News') return <Post category="news" data={data.data}/>;

    return <NotFound />;
};

export default Page;