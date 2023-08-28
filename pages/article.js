import cx from 'classnames';
import { useRouter } from 'next/router';
import React from 'react';

import { Module } from '@/components/modules';
import { getCustomPages } from '@/data';
import NotFoundPage from '@/pages/404';

const Page = ({ data }) => {
	const { page } = data;
	const router = useRouter();

	if (!router.isFallback && !data) {
		return <NotFoundPage statusCode={404} />;
	}

	return (
		<>
			<h1>Article Page</h1>
			<style jsx>{``}</style>
		</>
	);
};

export async function getStaticProps({ params, preview, previewData }) {
	const groq = `*[type == 'pArticle']`;
	const pageData = await getCustomPages(groq, {
		active: preview,
		token: previewData?.token,
	});

	return {
		props: {
			data: pageData,
		},
		revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME),
	};
}

export default Page;
