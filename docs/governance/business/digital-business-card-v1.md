# Digital Business Card Credential Documentation

## About this Document

This document describes the Digital Business Card verifiable credential to help potential verifiers determine whether it is suitable for their needs. The intended audience includes policy analysts, privacy specialists, solution architects, developers, and data architects.

The Digital Business Card credential is issued by the Government of British Columbia through Registries and Online Services (“BC Registries”), part of Service BC in the British Columbia Ministry of Citizens’ Services.

### Version History

| Ver.      | Date | Notes |
| ----------- | ----------- | ----------- |
| <b>1.0</b>      | 17-Nov-2023       | - |

## Credential Overview
The Digital Business Card (DBC) credential is a verifiable credential (VC) issued to individuals to enable them to prove to other parties (“verifiers”) that the individual is affiliated with a business registered or incorporated at BC Registries. Additionally, the credential includes verifiable information about both the individual and the business.

The DBC credential is intended to be used in a wide range of contexts, both alone or in conjunction with other credentials, as a source of trusted information. 

<table>
  <tr>
    <th>Credential</th>
    <td>Digital Business Card</td>
  </tr>
  <tr>
    <th>Issuer</th>
    <td>Government of British Columbia through Registries and Online Services (“BC Registries”), part of Service BC in the British Columbia Ministry of Citizens’ Services</td>
  </tr>
  <tr>
    <th>Issuer DID</th>
    <td>
        <a href="https://candyscan.idlab.org/tx/CANDY_PROD/domain/348">AcZpBDz3oxmKrpcuPcdKai</a>
    </td>
  </tr>
  <tr>
    <th>Schema</th>
        <td>
            Digital Business Card, version 1.0.0 
            <ul><li>Schema ID: <a href="https://candyscan.idlab.org/tx/CANDY_PROD/domain/350">AcZpBDz3oxmKrpcuPcdKai:2:Digital Business Card:1.0.0</a></li></ul>
        </td>
  </tr>
  <tr>
    <th>Credential</th>
        <td>NAME, version 1.0<ul><li>Cred Def ID: <a href="https://candyscan.idlab.org/tx/CANDY_PROD/domain/351">AcZpBDz3oxmKrpcuPcdKai:3:CL:350:default</a></li></ul></td>
  </tr>
  <tr>
    <th>Data Registry</th>
    <td> 
        CANdy Ledger
        <ul>
            <li>Ledger <a href="https://candyscan.idlab.org/home/CANDY_PROD">browser</a></li>
            <li>Ledger <a href="https://github.com/ICCS-ISAC/dtrust-reconu/blob/main/CANdy/prod/pool_transactions_genesis">Pool Genesis File</a></li>
        </ul>    
    </td>
  </tr>
  <tr>
    <th>Holders</th>
    <td>
        The DBC credential is currently only available to individuals whose identity and relationship to the business are well established. Currently, they must meet the following criteria:
        <ul>
            <li>The business is a Sole Proprietorship that was originally registered in the modern BC Registries system</li>
            <li>The individual authenticated to BC Registries using their BC Services Card digital identity, is the owner of the Sole Proprietorship, and is the person who completed the registration of the business</li>
        </ul>
    </td>
</tr>
<tr>
    <th>Data Source</th>
    <td>
        The DBC credential data comes from the BC Registries system. More specifically:
        <ul>
            <li>The individual’s name is from the BC Services Card digital identity; they are ultimately from subject’s Canadian foundational identity unless taken from marriage documents</li>
            <li>Business information is from the BC Registries system; some of this is reported by the business via filings</li>
            <li>The Credential ID is system-generated</li>
            <li>CRA Business Number is provided directly to the BC Registries system from the Canada Revenue Agency system</li>
        </ul>
    </td>
</tr>
<tr>
    <th>Revocation</th>
    <td>
        A DBC credential will be revoked – and sometimes re-issued – due to both automated events (e.g., data updates) and manual events. These are described in greater detail in the Revocation section, below.
    </td>
</tr>
<tr>
    <th>Assurance</th>
    <td>
        The DBC credential will only be issued to individuals who create and access the BC Registries system using the BC Services Card digital identity, which has been assessed and is accepted by the Government of Canada as a Trusted Digital Identity Level 3 for persons, and for whom BC Registries have established a relationship to the business in question.
    </td>
</tr>
</table>


### Attribute Summary

Attributes are fully described below in the [Attributes](#bookmark=id.d4k15yq1kvi3) section.

| **Name** | **Attribute** | **Data Type** |
| --- | --- | --- |
| Credential ID | <code>credential_id</code> | String |
| Given Names | <code>given_names</code> | String |
| Family Name | <code>family_name</code> | String |
| Role | <code>role</code> | String |
| Identifier | <code>identifier</code> | String |
| CRA Business Number | <code>cra_business_number</code> | String |
| Business Name | <code>business_name</code> | String |
| Business Type | <code>business_type</code> | String |
| Registered On | <code>registered_on_dateint</code> | Integer |
| Company Status | <code>company_status</code> | String |


## Credential Details

### Issuer

The Digital Business Card credential is issued by the Government of British Columbia through Registries and Online Services (“BC Registries”), part of Service BC in the British Columbia Ministry of Citizens’ Services. BC Registries is responsible for the creation (through incorporation or registration) of businesses, not-for-profit societies, cooperative associations, and sole proprietors (collectively, “businesses”).

BC Registries is responsible for:

- Administering the Partnership Act and Business Corporations Act, including processing filings by businesses (e.g., to register a sole proprietorship or to change the Directors of a corporation) and issuing records
- Operating BC Registries and Online Services, which allows representatives of companies to create accounts, make filings and record requests online, and delegate access to others

### Schema and Credential Definition Governance

The Digital Business Card credential definition implements the Digital Business Card schema (see [Credential Overview](#bookmark=id.35ojgs4iy68y) for references). Both the credential definition and the schema are published by BC Registries, part of Service BC in the British Columbia Ministry of Citizens’ Services. BC Registries may, after any consultation and notification it deems appropriate, update either the credential definition and/or the schema.

### Issuer Data Source

The data in the DBC credential comes from the BC Registries system, which generates the data for some attributes and receives from external sources the data for other attributes. Possible data sources are:

- **Business Filing** – the information is provided from a filing made by or on behalf of the business to BC Registries, as part of the business’ requirement to keep its information current as part of its obligation under the relevant legislation (e.g.,[Partnership Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96348_01), [Business Corporations Act](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/02057_00))
- **BC Registries system** – these include system generated information, such as identifiers and timestamps, as well as information derived from user actions (e.g., which individual was the person who created the business in the BC Registries system)
- **BC Services Card digital identity** – the identity information about the individual is created when the individual first accesses the BC Registries system using their BC Services Card digital identity and authenticator. The BC Services Card digital identity is a high assurance credential, with the individual’s name matching the name on their foundational identity document
- **Canada Revenue Agency** – the information is provided to the BC Registries system directly from a CRA system

The source of each attribute is described in the [Attributes](#bookmark=id.d4k15yq1kvi3) section.

#### Data Updates

When a DBC credential is issued, its data reflects the current records in BC Registries’ system. Changes to those records will trigger a revocation (and often re-issuance) of the credential to ensure the credential continues to reflect the identity record; these cases are described in further detail in the section on Revocation, below.

### Assurance

In order to minimize risk to BC Registries, verifiers, companies, and the individuals who represent companies, in the initial production release MVP phase (minimum valuable product), the DBC credential will only be issued to individuals when BC Registries is confident in both:

- Their identity
- Their relationship to the business

For this reason, in the MVP, the only individuals who may obtain a DBC credential from BC Registries are:

- Sole Proprietorship Business Owners who accessed the new Business Registries system using the BC Services Card mobile application and self-registered their own proprietorship

#### BC Services Card

The BC Services Card digital identity is used by BC Registries for both its identity information and the security of its two-factor authentication. By design, the BC Services Card digital identity meets the BC Office of the CIO [_Identity Assurance Standard_](https://www2.gov.bc.ca/assets/gov/government/services-for-government-and-broader-public-sector/information-technology-services/standards-files/identity_assurance_standard.pdf) requirements for a High (3) Identity Assurance Level. The BC Services Card digital identity has been assessed twice, in 2019 and 2021, by the Treasury Board of Canada Secretariat (TBS) against the Public Sector Profile of the Pan-Canadian Trust Framework (PSP-PCTF). In both cases, it was assessed as being a Trusted Digital Identity Level 3 (high), as defined in Appendix A of the TBS [_Directive on Identity Management_](https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=16577).

### Revocation

A DBC credential will be revoked in the following cases:

1. The individual is issued a new DBC credential for a business for which they already have been issued one or more credentials. An individual may only have one active DBC credential for a given business at a time, and when they are issued a new one, all previously issued active DBC credentials will be revoked.
1. A rare event has occurred, such as a change to the company identifier or the business is administratively dissolved by the Registrar

A DBC credential will be revoked and re-issued in the following cases:

1. The individual’s identity information is updated in the BC Registries system
1. The individual’s role at the business is updated in the BC Registries system
1. The Business Name or CRA Business Number is updated in the BC Registries system
1. The business dissolves itself in the BC Registries system – the new DBC credential will have an updated Company Status attribute

## Credential Definition

### Credential Schema

The Digital Business Card credential is based on the Digital Business Card schema. Both are published and maintained by the province of British Columbia.

### Subject of the Credential

The subject of the Digital Business Card credential is a relationship, the affiliation of an individual to a business.

- The individual is the person to whom the credential is issued, i.e., its holder
- The affiliation is derived from the individual’s access to the business’ account in the BC Registries system and information BC Registries has about that individual’s relationship to the business, such as their role (e.g., proprietor, director)

In future, authorization may also come from another individual who has been granted to issue the credentials by the business.

### Attributes

The attributes of the DBC credential are organized by topic and described below.

#### Attributes about the Credential

*Credential ID*

<table>
  <tr>
    <th>Attribute</th>
    <td><code>credential_id</code></td>
  </tr>
  <tr>
    <th>Description</th>
    <td>A unique identifier assigned by BC Registries that is specific to the relationship between the individual and the business.<br></br>
    This is intended to aid verifiers when the name of the individual and/or the business changes.</td>
  </tr>
  <tr>
    <th>Source</th>
    <td>BC Registries system, created when a credential is first issued to the individual for the business.</td>
  </tr>
  <tr>
    <th>Data Type</th>
    <td>String</td>
  </tr>
  <tr>
    <th>Format</th>
    <td><ul><li>8 digits, padded left with zeros</li></ul></td>
  </tr>
  <tr>
    <th>Rules</th>
    <td>
        <ul>
            <li>Never blank</li>
            <li>When a different credential is issued to the same individual for the same organization, the value of the Credential ID will be the same in both credentials unless BC Registries cannot confirm it is the same individual.</li>
        </ul>
    </td>
  </tr>
  <tr>
    <th>Examples</th>
    <td><code>00000001</code><br></br><code>00012345</code></td>
  </tr>
  <tr>
    <th>Notes</th>
    <td>
        <ul>
            <li>This attribute is intended to aid verifiers when they transact with:</li>
                <ul>
                    <li>Multiple individuals affiliated with a single business</li>
                    <li>Single individuals who represent multiple businesses</li>
                    <li>Individuals who have changed their name</li>
                </ul>
        </ul>
    </td>
  </tr>
</table>

### Attributes about the Individual

The DBC credential includes the business contact name for the individual, as well as their role with the business, if any has been filed with BC Registries.

The DBC credential gets the values for its name attribute from the BC Services Card Program, which obtains them from the individual’s Canadian foundational identity documents. Due to limitations in the source systems of the BC Services Card program partners, some individual’s names – in the BC Services Card and by extension the DBC credential – will not match what is on their foundational identity documents in the following cases:

- If an individual's name has a special character (e.g., Á, Ê, Ç) or a number in their name on their foundational identity document, it will not be reflected in the name attributes of the Person credential
- The name in the Person credential will normally reflect the name on foundational identity documents, but those documents may not reflect the individual’s name. For example:
  - Some names have special characters that the BC Vital Statistics will not accept and print on a birth certificate
  - Immigration, Refugees and Citizenship Canada (IRCC) will truncate an individual’s name (the combined given names and family name) at 45 characters on IIRC foundational identity documents (e.g., permanent resident card and the student, work, visitor, and temporary-resident permits)
- An individual may use the last name of their spouse without getting a legal name change. In these cases, their Person credential should reflect their foundational identity documents, as individuals are required by law to update their BC Services Card when they change their name by marriage or otherwise. Individuals who do this may continue to use their original name in other contexts, and so their Person credential may not be consistent with their other identity documents or credentials bearing their name

Note that the Person credential gets the values for its name attribute values from the BC Services Card and so has the same data limitations as the BC Services Card.

#### Given Names

<table>
  <tr>
    <th>Attribute</th>
    <td><code>given_names</code></td>
  </tr>
  <tr>
    <th>Description</th>
    <td>The individual's documented given names (first and middle) recorded from valid identification.</td>
  </tr>
  <tr>
    <th>Source</th>
    <td>The individual’s Registries Account name attributes, which come from the individual’s BC Services Card digital identity.</td>
  </tr>
  <tr>
    <th>Data Type</th>
    <td>String</td>
  </tr>
  <tr>
    <th>Format</th>
    <td>
        <ul>
            <li>Maximum 47 characters</li>
            <li>Always upper case</li>
            <li>Consists of three names, a first name and up to two middle names, delimited by spaces</li>
            <ul><li>Each name may be up to 15 characters long</li></ul>
            <li>The only characters allowed are the letters A through Z and the following "special characters": hyphen, apostrophe, period, and space</li>
        </ul>
    </td>
  </tr>
  <tr>
    <th>Rules</th>
    <td>
        <ul>
            <li>May be blank</li>
            <li>First and middle names over 15 characters are truncated</li>
            <li>If the individual has a mononym, this attribute will <i>normally</i> have no value and the mononym will appear in the family_name attribute</li>
        </ul>
    </td>
  </tr>
  <tr>
    <th>Notes</th>
    <td>
        <ul>
            <li>Names can start with special characters</li>
            <li>First Names and Middle Names with spaces or punctuation (e.g., “JO ANNE”, “JIAN U”, “D’ARCY”) will have the spaces and punctuation removed (e.g., “JOANNE”, “JIANU”, “DARCY”)</li>
            <li>To work around the removal of spaces, described above, a first name with a space (e.g. “JO ANNE”) may be entered as a first name and a middle name (e.g., “JO ANNE” is entered as “JO” and “ANNE”). This will appear as “JO ANNE” in the given_names attribute, which is indistinguishable from an individual whose first name is “JO” and whose middle name is “ANNE”. Similarly, a middle name with a space (e.g., “MARY LOU”) may be entered as two middle names (e.g., “MARY” and “LOU”). As such, spaces in the given_names attribute are not a reliable delimiter between names</li>
            <li>Some legacy records have only an initial for a middle name (e.g., "J" for "James")</li>
            <li>A mononym may be duplicated in this attribute and the family_name unless it has a space in it, in which case the first part may be recorded in this attribute and the second part in the family_name attribute</li>
        </ul>
    </td>
  </tr>
</table>


#### Family Name

<table>
  <tr>
    <th>Attribute</th>
    <td><code>family_name</code></td>
  </tr>
  <tr>
    <th>Description</th>
    <td>The individual's documented family name (i.e. surname) recorded from valid identification.</td>
  </tr>
  <tr>
    <th>Source</th>
    <td>The individual’s Registries Account name attributes, which come from the individual’s BC Services Card digital identity.</td>
  </tr>
  <tr>
    <th>Data Type</th>
    <td>String</td>
  </tr>
  <tr>
    <th>Format</th>
    <td>
        <ul>
            <li>Maximum 35 characters</li>
        </ul>
    </td>
  </tr>
  <tr>
    <th>Rules</th>
    <td>
        <ul>
            <li>Never blank</li>
            <li>Always upper case</li>
            <li>Family names over 35 characters are truncated</li>
            <li>The only characters allowed are the letters A through Z and the following "special characters": hyphen, apostrophe, period, and space</li>
        </ul>
    </td>
  </tr>
  <tr>
    <th>Notes</th>
    <td>
        <ul>
            <li>ast Names with spaces or punctuation (e.g., “St. John”, “O’Brian”, “van Cleef”, “Scott-Bigsby”) will have the spaces and punctuation included if the individual has a photo BC Services Card but removed if the individual has a non-photo BC Services Card</li>
            <li>A mononym may be duplicated in this attribute and the family_name unless it has a space in it, in which case the first part may be recorded in this attribute and the second part in the family_name attribute</li>
        </ul>
    </td>
  </tr>
</table>

#### Role

<table>
  <tr>
    <th>Attribute</th>
    <td>role</td>
  </tr>
  <tr>
    <th>Description</th>
    <td>
        The person's role(s) with the business, if any. <br></br>
        Roles are limited to those tracked by BC Registries, and do not normally correspond to job titles.
    </td>
  </tr>
  <tr>
    <th>Source</th>
    <td>
        Currently a business filing, from when an individual sets up their own proprietorship; during this process, they declare they are the proprietor.<br></br>
        In the future:
        <ul><li>Other roles will be determined through business filings supported by a process to authenticate and link a Registries Account record to the filing information</li></ul>
    </td>
  </tr>
  <tr>
    <th>Data Type</th>
    <td>String</td>
  </tr>
  <tr>
    <th>Format</th>
    <td>
        <ul>
            <li>Maximum 30 characters</li>
        </ul>
    </td>
  </tr>
  <tr>
    <th>Rules</th>
    <td>
        <ul>
            <li>Roles are limited to those defined by BC Registries (and/or its governing legislation) and by the Business Type. (For clarity, this will not include the person's role within or in relation to the organization, e.g., CEO, Accountant.)</li>
            <li>Allowable values (currently) are:</li>
            <ul><li>Proprietor</li></ul>
            <li>In future, allowable values may include:</li>
            <ul>
                <li>Incorporator</li>
                <li>Partner</li>
                <li>Director</li>
                <li>An indicator (to be determined) that the individual does not have such a role, or if their role(s) cannot be confidently determined by BC Registries</li>
            </ul>
            <li>An individual who is an Incorporator may have another role. In future, multiple roles will be separated by commas</li>
        </ul>
    </td>
  </tr>
  <tr>
    <th>Examples</th>
    <td><code>Partner</code><br></br><code>Proprietor</code><br></br><code>Incorporator, Proprietor</code></td>
  </tr>
</table>

### Attributes about the Business

#### Identifier

<table>
  <tr>
    <th>Attribute</th>
    <td><code>identifier</code></td>
  </tr>
  <tr>
    <th>Description</th>
    <td>A unique and permanent identifier that BC Registries creates and assigns to the business at the time the business is incorporated or registered with BC Registries.</td>
  </tr>
  <tr>
    <th>Source</th>
    <td>BC Registries system, created when the business is registered or incorporated</td>
  </tr>
  <tr>
    <th>Data Type</th>
    <td>String</td>
  </tr>
  <tr>
    <th>Format</th>
    <td>
        <ul>
            <li>10 characters</li>
            <li>Typically two letters followed by eight digits</li>
        </ul>
    </td>
  </tr>
  <tr>
    <th>Rules</th>
    <td>
        <ul>
            <li>Never blank</li>
            <li>Depending on the Business Type, the source of the BC Number is:</li>
            <ul>
                <li>Registration Number – Sole Proprietorship, General Partnership, and extra-provincial entities</li>
                <li>Incorporation Number – Corporations, Societies, Cooperative Associations</li>
            </ul>
        </ul>
    </td>
  </tr>
  <tr>
    <th>Examples</th>
    <td><code>FM0055205</code></td>
  </tr>
  <tr>
    <th>Notes</th>
    <td>
        <ul><li>This identifier can be used to get additional information about the business from BC Registries through <a href="https://orgbook.gov.bc.ca/">OrgBook</a> or <a href="https://developer.api.bcregistry.gov.bc.ca/">BC Registries API Gateway</a>.</li></ul>
        This attribute is in close alignment with:
        <ul><li>Open Ownership schema: <code>Identifier ID</code></li></ul>
    </td>
  </tr>
</table>

#### CRA Business Number

<table>
  <tr>
    <th>Attribute</th>
    <td><code>cra_business_number</code></td>
  </tr>
  <tr>
    <th>Description</th>
    <td>A unique identifier assigned to the business’ BC Registries business program area by the Canada Revenue Agency (CRA), a “BN15”.</td>
  </tr>
  <tr>
    <th>Source</th>
    <td>Canada Revenue Agency,<ul><li>A business number is automatically provided to new B.C. corporations, businesses or societies as part of the registration or incorporation process.</li></ul></td>
  </tr>
  <tr>
    <th>Data Type</th>
    <td>String</td>
  </tr>
  <tr>
    <th>Format</th>
    <td>
        <ul><li>15 characters</li></ul>
    </td>
  </tr>
  <tr>
    <th>Rules</th>
    <td>
        <ul>
            <li>May be blank</li>
            <ul><li>This will be blank if CRA has not created the business number or BC Registries does not know the Business Number assigned by CRA</li></ul>
            <li>This will be a 15-digit (BN15) number</li>
        </ul>
    </td>
  </tr>
  <tr>
    <th>Examples</th>
    <td><code>123456789BC0001</code></td>
  </tr>
  <tr>
    <th>Notes</th>
    <td>
        <ul>
            <li>A business may change its Business Number with CRA, and CRA will normally update BC Registries of the change</li>
            <li>For more information on Business Numbers, refer to the CRA</li>
        </ul>
        This attribute is in close alignment with:
        <ul><li>XBRL schema: <code>identifierTaxCode</code></li></ul>
    </td>
  </tr>
</table>


#### Business Name

<table>
  <tr>
    <th>Attribute</th>
    <td><code>business_name</code></td>
  </tr>
  <tr>
    <th>Description</th>
    <td>The operating name the sole proprietorship has registered for itself with BC Registries.<br></br>In future, when credentials may be issued for other types of businesses,  this may also be the operating name of a general partnership or the legal name of an incorporated company, a society, or a cooperative association.</td>
  </tr>
  <tr>
    <th>Source</th>
    <td>Business filing</td>
  </tr>
  <tr>
    <th>Data Type</th>
    <td>String</td>
  </tr>
  <tr>
    <th>Format</th>
    <td>
        <ul><li>Maximum 150 characters</li></ul>
    </td>
  </tr>
  <tr>
    <th>Rules</th>
    <td>
        <ul><li>Never blank</li></ul>
    </td>
  </tr>
  <tr>
    <th>Examples</th>
    <td><code>Rogers Communications Canada Inc.</code><br></br><code>12345676, Inc</code><br></br><code>Twelve Oaks Construction</code></td>
  </tr>
  <tr>
    <th>Notes</th>
    <td>
        This attribute is in close alignment with:
        <ul><li>Open Ownership schema: <code>name</code></li></ul>
    </td>
  </tr>
</table>

#### Business Type

<table>
  <tr>
    <th>Attribute</th>
    <td><code>business_type</code></td>
  </tr>
  <tr>
    <th>Description</th>
    <td>The type of business as defined by the legislation governing BC Registries.</td>
  </tr>
  <tr>
    <th>Source</th>
    <td>Business filing</td>
  </tr>
  <tr>
    <th>Data Type</th>
    <td>String</td>
  </tr>
  <tr>
    <th>Format</th>
    <td>
        <ul><li>Maximum 100 characters</li></ul>
    </td>
  </tr>
  <tr>
    <th>Rules</th>
    <td>
        <ul>
            <li>Never blank</li>
            <li>Initially the possible values will be:</li>
            <ul><li>Sole Proprietorship</li></ul>
        </ul>
    </td>
  </tr>
  <tr>
    <th>Examples</th>
    <td><code>Sole Proprietorship</code></td>
  </tr>
  <tr>
    <th>Notes</th>
    <td>
        <ul><li>Credential issuance will be limited to businesses that are created in the new BC Registries system. Additional business types may be added in the future</li></ul>
        This attribute is in close aignment with:
        <ul><li>Open Ownership schema: <code>entityType</code></li></ul>
    </td>
  </tr>
</table>

#### Registered On

<table>
  <tr>
    <th>Attribute</th>
    <td><code>registered_on_dateint</code></td>
  </tr>
  <tr>
    <th>Description</th>
    <td>The date the business was incorporated or registered in BC with BC Registries.</td>
  </tr>
  <tr>
    <th>Source</th>
    <td>BC Registries system</td>
  </tr>
  <tr>
    <th>Data Type</th>
    <td>String</td>
  </tr>
  <tr>
    <th>Format</th>
    <td>
        <ul><li>Eight digits in the format YYYYMMDD</li></ul>
    </td>
  </tr>
  <tr>
    <th>Rules</th>
    <td>
        <ul><li>Never blank</li></ul>
    </td>
  </tr>
  <tr>
    <th>Examples</th>
    <td><code>20180816</code></td>
  </tr>
  <tr>
    <th>Notes</th>
    <td>
        For companies incorporated in BC, this attribute is in close alignment with:
        <ul><li>Open Ownership schema: <code>foundingDate</code></li></ul>
    </td>
  </tr>
</table>


#### Company Status

<table>
  <tr>
    <th>Attribute</th>
    <td><code>company_status</code></td>
  </tr>
  <tr>
    <th>Description</th>
    <td>The status of the business at the time the credential is issued.</td>
  </tr>
  <tr>
    <th>Source</th>
    <td>BC Registries system, set when the business is first registered or incorporated and updated by either by business filings or the Registrar (e.g., due to failure to file)</td>
  </tr>
  <tr>
    <th>Data Type</th>
    <td>String</td>
  </tr>
  <tr>
    <th>Format</th>
    <td></td>
  </tr>
  <tr>
    <th>Rules</th>
    <td>
        <ul>
            <li>Never blank</li>
            <li>This may be either:</li>
            <ul>
                <li>Active</li>
                <li>Historical</li>
            </ul>
        </ul>
    </td>
  </tr>
  <tr>
    <th>Examples</th>
    <td><code>Active</code><br></br><code>Historical</code></td>
  </tr>
  <tr>
    <th>Notes</th>
    <td>
        There are cases where a person may represent a “Historic” business (e.g., tax audits can occur several years after a business is dissolved), and so it is possible for an individual have a DBC credential for such a business
    </td>
  </tr>
</table>
