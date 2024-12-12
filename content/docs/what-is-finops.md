---
date: '2024-12-11T12:52:53+09:00'
draft: true
linkTitle: 'FinOpsとは'
weight: 1
next: 'framework'
cascade:
  type: docs
---

{{< callout type="info" >}}
本ドキュメントは「[FinOps Foundation](https://www.finops.org/)」の「[What is FinOps](https://www.finops.org/introduction/what-is-finops/)」を翻訳したものです。英語版との違い(CC BY 4.0)
{{< /callout >}}

## FinOpsとは

> "FinOpsとは、クラウドのビジネス価値の最大化、データに基づいたタイムリーな意思決定、エンジニアリング、財務、ビジネスチーム間のコラボレーションを通じて財務上の説明責任を生み出すための運用フレームワークおよび組織文化的なプラクティスです。"

FinOps Foundation [Technical Advisory Council](https://www.finops.org/about/technical-advisory-council/)  
更新日: 2023年12月

[![](what-is-finops.png)](https://youtu.be/VDrcgEne6lU?si=iPUS1evJrCUMsLQ8)

---

At its core, FinOps is a cultural practice. It’s the way for teams to manage their cloud costs, where everyone takes ownership of their cloud usage supported by a central best-practices group. Cross-functional teams in Engineering, Finance, Product, etc work together to enable faster product delivery, while at the same time gaining more financial control and predictability.

{{< callout >}}
"FinOps is a portmanteau of “Finance” and “DevOps”, stressing the communications and collaboration between business and engineering teams."
{{< /callout >}}

Other names for the practice include “Cloud Financial Management”, “Cloud Financial Engineering” “Cloud Cost Management”, “Cloud Optimization”, or “Cloud Financial Optimization”.

{{< callout >}}
It is sometimes incorrectly referred to “Cloud Financial Operations” but that term is falling out of favor due to its ambiguity with the more traditional “Financial Operations” role that exists in Finance.
{{< /callout >}}

Regardless of the name, FinOps is the practice of bringing a financial accountability cultural change to the variable spend model of cloud, enabling distributed engineering and business teams to make trade-offs between speed, cost, and quality in their cloud architecture and investment decisions.

> If it seems that FinOps is about saving money, then think again. FinOps is about getting the most value out of cloud to drive efficient growth.

Cloud spend can drive more revenue, signal customer base growth, enable more product and feature release velocity, or even help shut down a data center. FinOps is all about removing blockers; empowering engineering teams to deliver better features, apps, and migrations faster; and enabling a cross-functional conversation about where to invest and when. Sometimes a business will decide to tighten the belt; sometimes it’ll decide to invest more. But now teams know why they’re making those decisions.

### Where to start learning FinOps

The FinOps Foundation offers a variety of ways to learn about the disciple depending on your familiarity and time commitment:

Download Intro to FinOps slides in Google Slides or Powerpoint
Watch the Intro to FinOps on YouTube
Review the FinOps Framework
Browse FinOps Assets for guides and playbooks
Read about Adopting FinOps in your organization
Attend FinOps Community Events
Read the Cloud FinOps book
Explore the State of FinOps annual survey
Get FinOps Certified

## FinOps Framework: Maximizing the business value of cloud

### FinOps Principles

There are 6 FinOps Principles are north stars that guide the activities of our FinOps practice.

### Core Stakeholders

While a central FinOps function may work to enable organizational change, FinOps is not done by a single person or team but rather changes the way that disparate engineering, finance, and business teams work together. Individuals at every level and in every area of an organization can have a different role to play in the FinOps practice: Executives, Engineers, FinOps Practitioners, Operations, Finance and Procurement.

Read more about FinOps Personas and Roles.

### Maturity Model
The practice of FinOps is inherently iterative and maturity of any given process, functional activity, Capability or Domain will improve with repetition. Typically a “Crawl” stage organization is highly reactive and focused on addressing problems after they occur, while a Run stage practice is proactively factoring cost into their architecture design choices and ongoing engineering processes.

A “Crawl, Walk, Run” maturity approach to performing FinOps enables organizations to start small, and grow in scale, scope and complexity as business value warrants maturing a functional activity. Taking quick action at a small scale and limited scope allows FinOps teams to assess the outcomes of their actions, and to gain insights into the value of taking further action in a larger, faster, or more granular way.

Learn more about FinOps Maturity in the FinOps Framework.

## FOCUS: The unified format for cloud billing data

![](https://www.finops.org/wp-content/uploads/2024/08/FOCUS-Flow-Diagram-v2.svg)

The FinOps Foundation supports the development of an open-source technical specification for cloud cost and usage billing data. This specification, called the FinOps Open Cost and Usage Specification (FOCUS™), defines a unified format for cloud vendors to produce consistent cost & usage datasets. FOCUS enables FinOps Practitioners to more easily unlock data-driven decision-making and maximize the business value of cloud, while making their skills more transferable across clouds, tools, and organizations.

The largest cloud service providers – Microsoft Azure, Google Cloud, Oracle Cloud Infrastructure (OCI), and Amazon Web Services (AWS) – all offer FOCUS-formatted cost and usage billing data exports directly from their native consoles. Several FinOps tooling vendors also support FOCUS data and generate reports using FOCUS attributes and metrics.

FinOps Practitioners can learn more about how to obtain FOCUS data from each cloud.

