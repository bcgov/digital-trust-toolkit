---
layout: default
title: UX Guide for Credentials
parent: Guides
---

# UX Guide for Credentials & Connections
## Overview
This guide is intended to ensure the credentials issued by the BC Government, or issued using BC Government infrastructure such as the CANdy ledger, are trusted and usable.
> **_MUST v SHOULD:_** This guide uses the terms “MUST” and “SHOULD” as defined in [Key words for use in RFCs to Indicate Requirement Levels](https://www.ietf.org/rfc/rfc2119.txt).

***Note**: this guide concerns how a credential appears in the BC Wallet, not the design of the credential’s schema*

| Goals | Approach to Meeting Goals |
| ----------- | ----------- |
| <ol><li>Encourage holders and issuers to value the credentials they are issued</li><li>Help holders to use their credentials and get support when needed</li><li>Help holders to interact with their contacts</li></ol>  |<ol><li>Consistency between credentials</li><li>Clear information in credentials and connections (aka, contacts)</li><li>Emphasizing the authority that issued a credential</li><li>Making it easy to connect with the service within an issuer that can provide information and assistance</li><li>Enable issuers to work with the credential template and understand how their credential will be presented in the BC Wallet app</li><ol> |

## BC Wallet – Current and Future Implementations
This guide is written to optimize how credentials will be presented in the BC Wallet app, which operates on mobile devices such as phones and tablets. The BC Wallet was first released in 2022, is evolving in response to user feedback, and is gradually adding support for [Overlays Capture Architecture (OCA) For Aries](https://github.com/swcurran/aries-rfcs/tree/oca4aries/features/0755-oca-for-aries). 

This guide is designed to help credential issuers take advantage of current BC Wallet functionality. They also aim to help issuers “future proof” their credential by providing guidance for OCA features that are expected to be supported by BC Wallet in the near future, and guidance to not use some aspects of OCA where future BC Wallet implementation is undefined.

## Credential
The BC Wallet presents credentials using a common template that is tailored to the specific credential based on:
- The credential’s data
- The OCA (Overlay Capture Architecture) bundle specified for the credential. The elements of the credential – e.g., its colour, logo, name, attribute names – are defined in various “overlays”. Guidance for the content of the OCA bundle for BC Government credentials are specified in this section.

*Insert example images*

For more details on OCA bundle, see:
- [Overlays Capture Architecture (OCA) For Aries](https://github.com/swcurran/aries-rfcs/tree/oca4aries/features/0755-oca-for-aries)
- [OCA for Aries Style Guide](https://github.com/swcurran/aries-rfcs/tree/oca4aries/features/0756-oca-for-aries-style-guide)
- [Credential Designs design guide](https://xd.adobe.com/view/045a1969-719a-4aa5-848f-637ef1b7051a-5109/)
- [BC Government OCA bundles](https://github.com/bcgov/aries-oca-bundles/tree/main/OCABundles/schema/bcgov-digital-trust)

## Credential Meta Information
The Meta Overlay data in the OCA file describes the schema to the wallet, which may then present this information to the holder in offers, proof requests, and when viewing the credentials in the wallet. Meta Overlay attribute names are are identified in OCA documentation with OL-MN and OL-MV.

| Meta Overlay | Description | BC Wallet | Guidance |
| ----------- | ----------- | ----------- | ----------- |
| name | The name of the credential | Shown on card view | <ul><li>MUST have a value</li><li>The name of the credential</li><li>Should be short – 1-3 words</li><li>Should be the name of the Schema on the ledger</li><li>Examples: Person, Digital Business Card</li></ul> |
| description | A plain language definition of the credential | *Not used* | <ul><li>MUST have a value<ul><li>*Include in anticipation of when BC Wallet uses this attribute*</li></ul><li>A description of the credential</li><li>Should be short – 10-20 words</li><li>Should reflect the subject/topic of the credential, i.e., what the credential attributes describe</li></ul> |
| issuer | The name of the organization that issues the credential | Shown on card view | <ul><li>MUST have a value</li><li>The name of the issuer of the credential</li><li>Should be the legal name of the organization, not a department or branch within the organization <ul><li>For credentials issued directly by the BC Government, this MUST be “Government of British Columbia”, unless a legislated role (or similar) is more appropriate</li><li>For credentials issued by crown corporations, this MUST be the name of corporation, e.g., for BC Hydro, this should be “British Columbia Hydro and Power Authority“</li></ul> |
| issuer_description | A description for the issuer of the credential | *Not used* | <ul><li>*This should be left blank until how it is used by the BC Wallet is defined*</li></ul> |
| issuer_url | A URL for the issuer of the credentialA URL for the issuer of the credential | *Not used* | <ul><li>*This should be left blank until how it is used by the BC Wallet is defined*</li></ul> |
| credential_help_text | Help text that is presented to the user of the BC Wallet in the context of the credential <br>If credential_support_url is defined, this text will be a hyperlink or button that a person can tap, resulting in the web page referenced by  credential_support_url being opened on the device browser | *Not used* | <ul><li>*Include in anticipation of when BC Wallet users this attribute *</li><li>Should be concise and specific to the credential</li><li>If it will present as a hyperlink, this should be short – 3-5 words and indicate where the URL goes (e.g., “Digital Business Card help page”)</li></ul> |
| credential_support_url | A link to a web page that has help information for users of the credential | *Not used* | <ul><li>MUST have a value<ul><li>*Include in anticipation of when BC Wallet users this attribute*</li></ul></li><li>URL for a service providing support in the use of the credential</li><li>Should link to a support page maintained by the program area (possibly a division or branch within the issuing organization) responsible for the credential</li></ul> |

## Attributes – Labels & Information
Two Overlays in the credential’s OCA bundle define affect how the credential’s attributes – the individual data elements defined in the credential’s schema – may be presented in BC Wallet: 
- Label – the text appearing beside the attribute data
- Information – text that may be used to elaborate on the label *(not used by BC Wallet)*
### Attribute Labels
Attribute labels appear in credential offers, proof requests, and in the credential details screen of BC Wallet. In the example below, “Given Names” is the label of the credential attribute “given_names”, which has the value “Jamie”.

*Insert Image*

Labels are defined in the Attribute Overlay and are identified in OCA documentation with OL-LA.Labels are defined in the Attribute Overlay and are identified in OCA documentation with OL-LA.

**Guidance**
- MUST be provided for each attribute in the credential
- Labels should be short – 1-3 words
- Labels should reflect the schema attribute name, e.g., “Given Names” for schema attribute “given_names”
- Labels should be consistent across credentials when those credentials have identical (or very similar) attributes, e.g, Date of Birth

### Attribute Information
*BC Wallet does not make use of this overlay but credentials should use it in anticipation of when BC Wallet does.*

Each attribute may include a plain language description of the schema attribute, to supplement the attribute’s label. In future, it may be supplement the labels that accompany each schema attribute with extra information that may be presented in, e.g., a tool tip.Each attribute may include a plain language description of the schema attribute, to supplement the attribute’s label. In future, it may be supplement the labels that accompany each schema attribute with extra information that may be presented in, e.g., a tool tip.

Attribute information is defined in the Information Overlay and are identified in OCA documentation with OL-IN.

**Guidance**
