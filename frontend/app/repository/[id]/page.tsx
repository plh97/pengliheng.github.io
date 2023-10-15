// package
import _ from "lodash";
import React, { Component } from "react";
import { fetchUser } from "@/apis/user";
import { fetchRepositoryDetail } from "@/apis/repository";
import { PageProps } from "@/.next/types/app/repository/[id]/page";
import Viewer from "@/components/Viewer";
import "./index.scss";
import Markdown from "@/components/Markdown";

export const metadata = {
  title: "Repository Detail Page",
  description: "This is Repository Detail Page | can view one Repository here",
};

export default async function RepositoryDetail({ params }: PageProps) {
  const userRes = await fetchUser();
  const repositoryRes = await fetchRepositoryDetail({
    repo: decodeURIComponent(params.id),
  });
  const repositoryText = _.get(
    repositoryRes,
    "data.search.edges[0].node.object.text",
    ""
  );
  const nameWithOwner = _.get(
    repositoryRes,
    "data.search.edges[0].node.nameWithOwner",
    ""
  );
  return (
    <div className="DetailPage">
      <Viewer title={nameWithOwner} data={userRes.data.viewer} />
      <div className="DetailPage__content">
        <Markdown>{repositoryText}</Markdown>
      </div>
    </div>
  );
}
