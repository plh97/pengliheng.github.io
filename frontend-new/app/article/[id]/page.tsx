import _ from "lodash";
import React, { Component } from "react";

import "./index.scss";
import Viewer from "@/components/Viewer";
import { fetchUser } from "@/apis/user";
import { fetchArticleDetail } from "@/apis/article";
import { PageProps } from "@/.next/types/app/article/[id]/page";
import Markdown from "@/components/Markdown";

export default async function ArticleDetail({ params }: PageProps) {
  const user = await fetchUser();
  const articleRes = await fetchArticleDetail(decodeURIComponent(params.id));
  const article = _.get(
    articleRes,
    "data.repositoryOwner.repository.issues.edges",
    {
      title: '',
      body: '',
    }
  );
  return (
    <div className="DetailPage">
      <Viewer title={article!.title} data={user.data.viewer} />
      <div className="DetailPage__content">
        <Markdown className="markdown-body">{article.body}</Markdown>
      </div>
    </div>
  );
}