/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import Wrap from '../layouts/wrap'
import { Component } from 'react'

export default class BlogSinglePage extends Component {
  render = () => {
    const data = this.props.pageContext.blogData

    return (
      <Wrap lightsOn isBlogPage seoTitle={`${data.title} | Blog | Chandu J S`}>
        <div
          className="content-wrap"
          css={css`
            .blog-wrap {
              padding: 3rem;
              transition-duration: 0.3s;
              max-width: 1000px;

              @media screen and (max-width: 500px) {
                margin-left: -3rem;
                margin-right: -3rem;
                border-radius: 0 !important;
                width: calc(100% - -5rem);
              }
              @media print {
                border: 1px solid;
              }
            }
          `}>
          <div className="mb-5">
            <div className="h1 font-weight-bold text-body">{data.title}</div>
            <div className="mb-3">
              Published On: {data.readable_publish_date}
            </div>
            <div className="tags">
              {data.tags.map(tag => (
                <span className="badge badge-pill badge-brand mb-2 mr-2 ng-star-inserted py-1">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white blog-wrap rounded-lg overflow-hidden">
            <div
              css={css`
                margin: -3rem -3rem 3rem;
                max-width: calc(100% - -6rem);
                height: 420px;
              `}>
              <img src={data.cover_image} width="100%" alt={data.title} />
            </div>
            <div
              css={css`
                code,
                pre {
                  text-align: left;
                  white-space: pre;
                  word-spacing: normal;
                  word-break: normal;
                  word-wrap: normal;
                  color: #90a4ae;
                  background: #fafafa;
                  font-family: monospace;
                  font-size: 1em;
                  line-height: 1.5em;

                  -moz-tab-size: 4;
                  -o-tab-size: 4;
                  tab-size: 4;

                  -webkit-hyphens: none;
                  -moz-hyphens: none;
                  -ms-hyphens: none;
                  hyphens: none;
                }

                code::selection,
                pre::selection,
                code ::selection,
                pre ::selection {
                  background: #cceae7;
                  color: #263238;
                }

                :not(pre) > code {
                  white-space: normal;
                  border-radius: 0.2em;
                  padding: 0.1em;
                }

                pre {
                  overflow: auto;
                  position: relative;
                  display: block;
                  margin: 1.5rem -3rem;
                  padding: 1.25em 3em;
                  border: 1px solid #f7f7f7;
                  border-left: 0;
                  border-right: 0;
                }

                .language-css > code,
                .language-sass > code,
                .language-scss > code {
                  color: #f76d47;
                }

                .namespace {
                  opacity: 0.7;
                }

                .token.atrule {
                  color: #7c4dff;
                }

                .token.attr-name {
                  color: #39adb5;
                }

                .token.attr-value {
                  color: #f6a434;
                }

                .token.attribute {
                  color: #f6a434;
                }

                .token.boolean {
                  color: #7c4dff;
                }

                .token.builtin {
                  color: #39adb5;
                }

                .token.cdata {
                  color: #39adb5;
                }

                .token.char {
                  color: #39adb5;
                }

                .token.class {
                  color: #39adb5;
                }

                .token.class-name {
                  color: #6182b8;
                }

                .token.comment {
                  color: #aabfc9;
                }

                .token.constant {
                  color: #7c4dff;
                }

                .token.deleted {
                  color: #e53935;
                }

                .token.doctype {
                  color: #aabfc9;
                }

                .token.entity {
                  color: #e53935;
                }

                .token.function {
                  color: #7c4dff;
                }

                .token.hexcode {
                  color: #f76d47;
                }

                .token.id {
                  color: #7c4dff;
                  font-weight: bold;
                }

                .token.important {
                  color: #7c4dff;
                  font-weight: bold;
                }

                .token.inserted {
                  color: #39adb5;
                }

                .token.keyword {
                  color: #7c4dff;
                }

                .token.number {
                  color: #f76d47;
                }

                .token.operator {
                  color: #39adb5;
                }

                .token.prolog {
                  color: #aabfc9;
                }

                .token.property {
                  color: #39adb5;
                }

                .token.pseudo-class {
                  color: #f6a434;
                }

                .token.pseudo-element {
                  color: #f6a434;
                }

                .token.punctuation {
                  color: #39adb5;
                }

                .token.regex {
                  color: #6182b8;
                }

                .token.selector {
                  color: #e53935;
                }

                .token.string {
                  color: #f6a434;
                }

                .token.symbol {
                  color: #7c4dff;
                }

                .token.tag {
                  color: #e53935;
                }

                .token.unit {
                  color: #f76d47;
                }

                .token.url {
                  color: #e53935;
                }

                .token.variable {
                  color: #e53935;
                }

                pre.line-numbers {
                  position: relative;
                  padding-left: 3.8em;
                  counter-reset: linenumber;
                }

                pre.line-numbers > code {
                  position: relative;
                  white-space: inherit;
                }

                .line-numbers .line-numbers-rows {
                  position: absolute;
                  pointer-events: none;
                  top: 0;
                  font-size: 100%;
                  left: -3.8em;
                  width: 3em; /* works for line-numbers below 1000 lines */
                  letter-spacing: -1px;
                  border: 0;
                  opacity: 0.3;

                  -webkit-user-select: none;
                  -moz-user-select: none;
                  -ms-user-select: none;
                  user-select: none;
                }

                .line-numbers-rows > span {
                  pointer-events: none;
                  display: block;
                  counter-increment: linenumber;
                }

                .line-numbers-rows > span:before {
                  content: counter(linenumber);
                  color: #999;
                  display: block;
                  padding-right: 0.8em;
                  text-align: right;
                  margin-bottom: 0.123rem;
                }

                .code-toolbar .toolbar-item button {
                  position: absolute;
                  top: 1rem;
                  right: -2rem;
                  border: 0;
                  text-transform: uppercase;
                  font-size: 0.8rem;
                  background: none;
                  font-weight: bold;
                  opacity: 0;
                  transition-duration: 0.2s;
                }
                .code-toolbar {
                  position: relative;
                }

                .code-toolbar:hover button {
                  opacity: 0.2;
                }
                .code-toolbar .toolbar-item button:hover {
                  opacity: 0.7;
                }
              `}
              dangerouslySetInnerHTML={{ __html: data.body_html }}
            />
          </div>
        </div>
      </Wrap>
    )
  }
}
