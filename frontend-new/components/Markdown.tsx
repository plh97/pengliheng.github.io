"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReactMarkdown from "react-markdown";

export default function Markdown(props: {
  children: string;
  className?: string;
}) {
  return (
    <ReactMarkdown
      className={"markdown-body" + " " + props.className??''}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          if (match) {
            return (
              <SyntaxHighlighter
                // {...rest}
                style={dark}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            );
          }
          return (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {props.children}
    </ReactMarkdown>
  );
}