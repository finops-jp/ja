---
title: 使用量とコストの理解
---

[英語版]: https://www.finops.org/framework/domains/understand-cloud-usage-cost/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

# クラウドの使用量とコストの理解

このドメインの結果は、組織によるクラウドの使用についてより深く理解することです。

このドメイン内では、組織はクラウドのコスト、使用状況、およびその他のメトリックに関する必要なすべての情報を収集するために作業します。データソース間で正規化します。クラウドユーザー間でどのように割り当てられるかを定義します。また、このドメインと他のドメインのすべてのペルソナがデータを使用できるようにするためのレポートを定義します。

組織は、クラウドプロバイダーやその他のサービスプロバイダーからクラウド使用状況データを収集します。コスト、利用率、炭素使用量などの関連指標を定義して収集します。また、クラウドのコストと使用状況を分類、割り当て、要約するために使用される組織のメタデータを文書化します。

このドメインは、組織内のコストと使用状況を理解し、割り当てることに重点を置いています。このドメインで生成された情報と洞察は、他のすべてのドメインおよび組織の他の部分によってさまざまな目的で使用されます。

> このドメインの機能は、組織に次のことを支援します。
> 
> - 関連するすべてのクラウドコストと使用状況データを特定、カタログ化、取り込みます
> - 必要に応じてソース間でデータを正規化し、[FOCUS](https://focus.finops.org)データセットを優先的に使用します
> - すべてのコストを内部のクラウドユーザーにマッピングするための配分戦略を定義する
> - 共有コストとリソースを割り当てるための手法とポリシーを定義する
> - 一貫性のあるレポート作成ツール、パラメーター、およびメソッドを作成および定義します
> - コンテキストに関連したレポートデータを定義し、ペルソナが活動するペルソナに配布します
> - 組織全体で交差する分野で働く関連ペルソナのニーズを理解して文書化し、クラウドのコストと使用状況データのニーズを理解します。これには、ITAM、ITIL、サステナビリティ、セキュリティなどの交差する分野が含まれます

> このドメインは、次の[FinOpsの原則](/docs/framework/principles)を直接サポートします。
> 
> - 誰もが自分のクラウドの使用に責任を持つ
> - FinOpsデータはアクセス可能でタイムリーであるべきです
> - 一元化されたチームがFinOpsを推進
> - チームは協力する必要がある

このドメインにより、組織は、使用しているクラウドサービス、支出を促進しているもの、およびその支出の責任者を理解できます。このドメインでのアクティビティは、現在のクラウド使用状況の全体像と過去の傾向のビューをサポートするためのデータを一貫して提供し、組織の現在の成熟度レベルに適した他のすべてのドメインをサポートするための粒度レベルで提供します。

> このドメインは、次の質問に答えます。
> 
> - クラウドで何を使用していますか?
> - 私たちはそれに何を費やしていますか?
> - その使用が私たちにとって重要な炭素やその他の指標に与える影響は何ですか?
> - その使用とコストは、組織内の誰が担当しますか?
> - すべての[FinOpsペルソナ](/docs/framework/personas)は、どのようにしてそのコストと使用状況のデータにアクセスできるのでしょうか?

:::info[ドメインケイパビリティ]

- [データ取り込み](/docs/framework/capabilities/data-ingestion/)
- [割り当て](/docs/framework/capabilities/allocation/)
- [レポートと分析](/docs/framework/capabilities/reporting-analytics/)
- [異常管理](/docs/framework/capabilities/anomaly-management/)

:::