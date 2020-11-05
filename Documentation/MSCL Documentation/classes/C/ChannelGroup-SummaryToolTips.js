NDSummary.OnToolTipsLoaded("CClass:ChannelGroup",{5318:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5318\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelGroup</div></div></div><div class=\"TTSummary\">Represents a group of channels that have combined settings.</div></div>",5320:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5320\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ChannelGroup(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">channelMask,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">groupName,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SettingsMap&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">settings</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a ChannelGroup object.</div></div>",5322:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5322\" class=\"NDPrototype NoParameterForm\">ChannelMask m_channels</div><div class=\"TTSummary\">The ChannelMask representing which channels are part of this group.</div></div>",5323:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5323\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_name</div><div class=\"TTSummary\">The name of the group.</div></div>",5324:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The WirelessTypes::ChannelGroupSettings that this group supports.</div></div>",5325:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype5325\" class=\"NDPrototype NoParameterForm\">SettingsMap m_settingsMap</div><div class=\"TTSummary\">A map of WirelessTypes::ChannelGroupSetting to EepromLocation pairs.</div></div>",5327:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5327\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">const</span> EepromLocation&amp; getSettingEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelGroupSetting&nbsp;</td><td class=\"PName last\">setting</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the EepromLocation for the given &lt;Setting&gt;.</div></div>",5328:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5328\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> ChannelMask&amp; channels() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ChannelMask representing which channels are part of this group.</div></div>",5329:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5329\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> std::<span class=\"SHKeyword\">string</span>&amp; name() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the name of the channel group.</div></div>",5330:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5330\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> eepromLocation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelGroupSetting&nbsp;</td><td class=\"PName last\">setting</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the eeprom location that the ChannelGroup uses for a specified setting.</div></div>",5331:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5331\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> WirelessTypes::ChannelGroupSettings&amp; settings() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::ChannelGroupSettings that this group supports.</div></div>",5332:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5332\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> hasSetting(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">ChannelGroupSetting&nbsp;</td><td class=\"PName last\">setting</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Helper function for quick check if setting is present in this channel group.</div></div>",5333:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Helper function to check if this channel group has a specific setting and channel included in it.</div></div>",5335:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">A typedef for a vector of ChannelGroups.</div></div>"});