import React from 'react';
import {
  Charge,
  Calender,
  Finance,
  Time,
  File,
  Card,
  Star,
  MenuIcon,
  Info,
  MenuDrawer,
  RightArrow,
  Money,
  Wallet,
  Share,
  Bell,
  TopCircle,
  Down,
  CheckCircle,
  Paperclip,
  Rupee,
  Privacy,
  CopyFile,
  Search1,
  Briefcase,
  MessageCircle,
  Settings,
  FileDrawer,
  Search,
  Bag,
  GroupCopy,
  MailDrawer,
  GroupShare,
  Logout,
  UserLocation,
  Business,
  DownArrow,
  BackArrow,
  DeleteGrey,
  BlueRupeeIcon,
  Instagram,
  BlackCross,
  Twitter,
  Info1,
  Edit,
  Delete,
  EditButton,
  EyesLash,
  Add,
  Save,
  Linkedin1,
  StackOverflow,
  Quora,
  Files,
  GitHub,
  LinkedIn,
  Behance,
  BlueBriefcase,
  Back,
  Commercial,
  Send,
  LeftArrow,
  FilterIcon,
  LocationLightIcon,
  Custom,
  BriefsCaseBlue,
  VectorLocation,
  OfficeBag,
  BlueLocation,
  CalenderBlue,
  Copy,
} from './';

export enum Icons {
  CHARGE,
  PRIVACY,
  CUSTON,
  BRIEF,
  MESSAGE,
  CALENDERBLUE,
  POPULAR,
  BRIEFCASEBLUE,
  LOCATION,
  FILTER,
  BLUELOCATION,
  LOCATIONBLUE,
  COPY,
  LEFT,
  SETTING,
  SEARCH1,
  FILES,
  RUPEES,
  COMMERCIAL,
  EDITB,
  SEND,
  LINKDIN1,
  USERLOCATION,
  BUSINESS,
  STACK,
  SEARCH,
  BAGBLUE,
  BAHLANCE,
  RUPEE,
  BRIEFCASE,
  OUORA,
  FILEDRAWER,
  LINKDIN,
  TOPCIRCLE,
  MAILDRAWER,
  TWITTER,
  EYES,
  CALENDER,
  INFO1,
  DOWNARROW,
  DELETEGREY,
  GITHUB,
  FINANCE,
  ADD,
  TIME,
  INSTAGRAM,
  DELETE,
  FILE,
  DOWN,
  CARD,
  BACKARROW,
  BLACKCROSS,
  STAR,
  MENUICON,
  MENUDRAWER,
  GROUPSHAIR,
  GROPCOPY,
  Edit,
  RIGHTARROW,
  SAVE,
  WALLET,
  BELL,
  CHECKCIRCLE,
  LOGOUT,
  BLUERUPEE,
  BACK,
  INFO,
  BAG,
  EDIT,
  MONEY,
  COPYFILE,
  SHARE,
}

export const getIcons = (type: Icons, size?: number, colors?: string) => {
  const iconSize = size ? size : 20;
  const colorIcann = colors ? colors : 'black';
  switch (type) {
    case Icons.CHARGE:
      return <Charge height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.CUSTON:
      return <Custom height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.CALENDERBLUE:
      return (
        <CalenderBlue height={iconSize} width={iconSize} fill={colorIcann} />
      );
    case Icons.COPY:
      return <Copy height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.BAGBLUE:
      return <Bag height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.BLUELOCATION:
      return (
        <BlueLocation height={iconSize} width={iconSize} fill={colorIcann} />
      );
    case Icons.SAVE:
      return <Save height={iconSize} width={iconSize} fill={colorIcann} />;

    case Icons.BAG:
      return <OfficeBag height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.LOCATIONBLUE:
      return (
        <VectorLocation height={iconSize} width={iconSize} fill={colorIcann} />
      );
    case Icons.BRIEFCASEBLUE:
      return (
        <BriefsCaseBlue height={iconSize} width={iconSize} fill={colorIcann} />
      );
    case Icons.FILTER:
      return (
        <FilterIcon height={iconSize} width={iconSize} fill={colorIcann} />
      );
    case Icons.FILES:
      return <Files height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.USERLOCATION:
      return (
        <UserLocation height={iconSize} width={iconSize} fill={colorIcann} />
      );
    case Icons.BUSINESS:
      return <Business height={iconSize} width={iconSize} fill={colorIcann} />;

    case Icons.DOWN:
      return <Down height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.LOCATION:
      return (
        <LocationLightIcon
          height={iconSize}
          width={iconSize}
          fill={colorIcann}
        />
      );
    case Icons.SEARCH1:
      return <Search1 height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.CALENDER:
      return <Calender height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.COPYFILE:
      return <CopyFile height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.POPULAR:
      return <Paperclip height={iconSize} width={iconSize} fill={colorIcann} />;

    case Icons.SHARE:
      return <Share height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.TOPCIRCLE:
      return <TopCircle height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.LINKDIN1:
      return <Linkedin1 height={iconSize} width={iconSize} fill={colorIcann} />;

    case Icons.EYES:
      return <EyesLash height={iconSize} width={iconSize} fill={colorIcann} />;

    case Icons.SEND:
      return <Send height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.INFO1:
      return <Info1 height={iconSize} width={iconSize} fill={colorIcann} />;

    case Icons.LEFT:
      return <LeftArrow height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.DOWNARROW:
      return <DownArrow height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.RUPEE:
      return <Rupee height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.COMMERCIAL:
      return (
        <Commercial height={iconSize} width={iconSize} fill={colorIcann} />
      );

    case Icons.BACKARROW:
      return <Back height={iconSize} width={iconSize} fill={colorIcann} />;

    case Icons.MONEY:
      return <Money height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.BRIEFCASE:
      return (
        <BlueBriefcase height={iconSize} width={iconSize} fill={colorIcann} />
      );
    case Icons.GROPCOPY:
      return <GroupCopy height={iconSize} width={iconSize} fill={colorIcann} />;

    case Icons.GROUPSHAIR:
      return (
        <GroupShare height={iconSize} width={iconSize} fill={colorIcann} />
      );

    case Icons.SEARCH:
      return <Search height={iconSize} width={iconSize} fill={colorIcann} />;

    case Icons.BAHLANCE:
      return <Behance height={iconSize} width={iconSize} fill={colorIcann} />;

    case Icons.OUORA:
      return <Quora height={iconSize} width={iconSize} fill={colorIcann} />;

    case Icons.INSTAGRAM:
      return <Instagram height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.LINKDIN:
      return <LinkedIn height={iconSize} width={iconSize} fill={colorIcann} />;

    case Icons.GITHUB:
      return <GitHub height={iconSize} width={iconSize} fill={colorIcann} />;

    case Icons.DELETEGREY:
      return (
        <DeleteGrey height={iconSize} width={iconSize} fill={colorIcann} />
      );
    case Icons.INFO:
      return <Info height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.EDITB:
      return (
        <EditButton height={iconSize} width={iconSize} fill={colorIcann} />
      );

    case Icons.TWITTER:
      return <Twitter height={iconSize} width={iconSize} fill={colorIcann} />;

    case Icons.STACK:
      return (
        <StackOverflow height={iconSize} width={iconSize} fill={colorIcann} />
      );

    case Icons.EDIT:
      return <Edit height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.DELETE:
      return <Delete height={iconSize} width={iconSize} fill={colorIcann} />;

    case Icons.FINANCE:
      return <Finance height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.TIME:
      return <Time height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.FILE:
      return <File height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.CARD:
      return <Card height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.STAR:
      return <Star height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.MENUICON:
      return <MenuIcon height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.MENUDRAWER:
      return (
        <MenuDrawer height={iconSize} width={iconSize} fill={colorIcann} />
      );
    case Icons.WALLET:
      return <Wallet height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.LOGOUT:
      return <Logout height={iconSize} width={iconSize} fill={colorIcann} />;

    case Icons.PRIVACY:
      return <Privacy height={iconSize} width={iconSize} fill={colorIcann} />;

    case Icons.BLACKCROSS:
      return (
        <BlackCross height={iconSize} width={iconSize} fill={colorIcann} />
      );

    case Icons.RIGHTARROW:
      return (
        <RightArrow height={iconSize} width={iconSize} fill={colorIcann} />
      );
    case Icons.CHECKCIRCLE:
      return (
        <CheckCircle height={iconSize} width={iconSize} fill={colorIcann} />
      );
    case Icons.BELL:
      return <Bell height={iconSize} width={iconSize} fill={colorIcann} />;

    case Icons.BACK:
      return <BackArrow height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.BRIEF:
      return <Briefcase height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.MESSAGE:
      return (
        <MessageCircle height={iconSize} width={iconSize} fill={colorIcann} />
      );
    case Icons.SETTING:
      return <Settings height={iconSize} width={iconSize} fill={colorIcann} />;
    case Icons.FILEDRAWER:
      return (
        <FileDrawer height={iconSize} width={iconSize} fill={colorIcann} />
      );
    case Icons.MAILDRAWER:
      return (
        <MailDrawer height={iconSize} width={iconSize} fill={colorIcann} />
      );

    case Icons.BLUERUPEE:
      return (
        <BlueRupeeIcon height={iconSize} width={iconSize} fill={colorIcann} />
      );
  }
};
