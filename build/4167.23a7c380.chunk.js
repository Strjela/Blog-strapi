"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[4167],{44167:(c,D,_)=>{_.r(D),_.d(D,{AdminSeatInfoEE:()=>K});var E=_(92132),l=_(68074),t=_(30893),O=_(83997),i=_(79739),L=_(58805),A=_(21610),a=_(69593),C=_(68994),I=_(14595),v=_(54894),B=_(82437),U=_(51833),R=_(53682),N=_(21272),F=_(55151),H=_(79077),z=_(48940),G=_(2600),J=_(51187),Q=_(15126),V=_(63299),X=_(67014),Y=_(59080),Z=_(79275),$=_(14718),e=_(61535),p=_(5790),u=_(12083),k=_(35223),w=_(5409),b=_(74930),q=_(41286),__=_(56336),E_=_(13426),s_=_(84624),t_=_(77965),a_=_(54257),M_=_(71210),D_=_(39404),O_=_(58692),P_=_(501),n_=_(57646),o_=_(23120),d_=_(44414),l_=_(25962),i_=_(14664),L_=_(42588),A_=_(90325),C_=_(62785),I_=_(87443),v_=_(41032),B_=_(22957),U_=_(93179),R_=_(73055),T_=_(15747),W_=_(85306),K_=_(26509),m_=_(32058),h_=_(81185),r_=_(82261);const T="https://cloud.strapi.io/profile/billing",W="https://strapi.io/billing/request-seats",K=()=>{const{formatMessage:s}=(0,v.A)(),{settings:m}=(0,B.d4)(U.s),{isLoading:P,allowedActions:{canRead:h,canCreate:r,canUpdate:g,canDelete:f}}=(0,a.ec)(m?.users??{}),{license:n,isError:j,isLoading:x}=(0,R.m)({enabled:!P&&h&&r&&g&&f});if(j||(P||x)||!n)return null;const{licenseLimitStatus:y,enforcementUserCount:o,permittedSeats:M,isHostedOnStrapiCloud:d}=n;return M?(0,E.jsxs)(l.E,{col:6,s:12,children:[(0,E.jsx)(t.o,{variant:"sigma",textColor:"neutral600",children:s({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})}),(0,E.jsxs)(O.s,{gap:2,children:[(0,E.jsx)(O.s,{children:(0,E.jsx)(t.o,{as:"p",children:s({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:M,enforcementUserCount:o,text:S=>(0,E.jsx)(t.o,{fontWeight:"semiBold",textColor:o>M?"danger500":void 0,children:S})})})}),y==="OVER_LIMIT"&&(0,E.jsx)(i.m,{description:s({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),children:(0,E.jsx)(L.I,{width:(0,a.a8)(14),height:(0,a.a8)(14),color:"danger500",as:C.A})})]}),(0,E.jsx)(A.N,{href:d?T:W,isExternal:!0,endIcon:(0,E.jsx)(I.A,{}),children:s({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:d})})]}):null}}}]);
