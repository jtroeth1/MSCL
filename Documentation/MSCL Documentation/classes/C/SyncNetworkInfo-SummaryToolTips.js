NDSummary.OnToolTipsLoaded("CClass:SyncNetworkInfo",{6497:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6497\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SyncNetworkInfo</div></div></div><div class=\"TTSummary\">Contains network information for a WirelessNode that has been added to the Sync Sampling Network.</div></div>",6499:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The status of an individual node.</div></div>",6505:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6505\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SyncNetworkInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">node</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SyncNetworkInfo object</div></div>",6507:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6507\" class=\"NDPrototype NoParameterForm\">WirelessNode m_node</div><div class=\"TTSummary\">The WirelessNode that this info belongs to</div></div>",6508:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6508\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The NodeAddress of the Node that this info belongs to.</div></div>",6509:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6509\" class=\"NDPrototype NoParameterForm\">WirelessModels::NodeModel m_model</div><div class=\"TTSummary\">The WirelessModels::NodeModel of the Node that this info belongs to.</div></div>",6510:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6510\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_percentBandwidth</div><div class=\"TTSummary\">The standard percent of bandwidth that this node takes up</div></div>",6511:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6511\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_percentBandwidth_optimized</div><div class=\"TTSummary\">The space-optimized percent of bandwidth that this node takes up</div></div>",6512:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6512\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_tdmaAddress</div><div class=\"TTSummary\">The TDMA address that was found for this node</div></div>",6513:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6513\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_slotSize</div><div class=\"TTSummary\">The number of individual slots that the node takes up per transmission</div></div>",6514:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6514\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_maxTdmaAddress</div><div class=\"TTSummary\">The maximum TDMA address that can be assigned for the node</div></div>",6515:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6515\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_txPerGroup</div><div class=\"TTSummary\">The number of transmissions per group</div></div>",6516:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6516\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_groupSize</div><div class=\"TTSummary\">The size of the group</div></div>",6517:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6517\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_bytesPerSweep</div><div class=\"TTSummary\">The number of bytes per data sweep.</div></div>",6518:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6518\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_bytesPerBurst</div><div class=\"TTSummary\">The number of bytes per burst (only valid if in Burst mode).</div></div>",6519:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6519\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_maxBytesPerPacket</div><div class=\"TTSummary\">The maximum number of bytes per packet.</div></div>",6520:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6520\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">double</span> m_bytesPerSecond</div><div class=\"TTSummary\">The number of bytes per second (continuous sampling).</div></div>",6521:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6521\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_maxRetxPerBurst</div><div class=\"TTSummary\">The number of maximum retransmissions per burst (if burst)</div></div>",6522:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6522\" class=\"NDPrototype NoParameterForm\">NodeStatus m_status</div><div class=\"TTSummary\">The status of the node</div></div>",6523:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6523\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> m_syncSamplingVersion</div><div class=\"TTSummary\">The version of the Sync Sampling formulas to use.</div></div>",6524:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6524\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_optimized</div><div class=\"TTSummary\">Whether or not this node has attempted optimization</div></div>",6525:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6525\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_configApplied</div><div class=\"TTSummary\">Whether or not the configuration has been applied for this node</div></div>",6526:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6526\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_startedSampling</div><div class=\"TTSummary\">Whether or not the Node has been send the Start Sync Sampling command.</div></div>",6527:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6527\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_hasPendingConfig</div><div class=\"TTSummary\">Whether or not there is a &quot;pending&quot; configuration set for this Node.</div></div>",6528:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6528\" class=\"NDPrototype NoParameterForm\">WirelessNodeConfig m_pendingConfig</div><div class=\"TTSummary\">A WirelessNodeConfig set to be used in all sync network calculations, without actually being applied to the Node.</div></div>",6530:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6530\" class=\"NDPrototype NoParameterForm\">NodeStatus status() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node\'s network status.</div></div>",6531:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6531\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> startedSampling() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Checks whether a Node has successfully started sampling.&nbsp; Note: if this returns false, its not 100% gauranteed that the Node isn\'t sampling. It\'s possible the node was successfully started, but that the response never got to the BaseStation.</div></div>",6532:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6532\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> configurationApplied() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not the network configuration has been successfully applied to this node.</div></div>",6533:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6533\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> percentBandwidth() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node\'s individual percent of bandwidth in the network.</div></div>",6534:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6534\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> tdmaAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the TDMA address that was found and assigned to the node.</div></div>",6535:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6535\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> maxTdmaAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum TDMA address that can be assigned to this node. (Advanced)</div></div>",6536:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets the number of transmissions per group for this node. (Advanced)</div></div>",6537:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6537\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> groupSize() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the group size for this node. (Advanced)</div></div>",6538:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6538\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> syncSamplingVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">The version of the Sync Sampling formulas to use.</div></div>",6539:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6539\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> dutyCycle() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the duty cycle currently set (for Event Driven).</div></div>",6540:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6540\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> dutyCycle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">percent</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",6541:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6541\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> hasPendingConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not this network info has a pending configuration set.</div></div>",6542:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6542\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setPendingConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNodeConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets a pending configuration for the Node in this network info.&nbsp; This is a configuration that is not actually applied to the Node, but should be used in all sync network calculations.</div></div>",6543:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6543\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> WirelessNodeConfig&amp; getPendingConfig() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current pending configuration that is set.</div></div>",6544:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6544\" class=\"NDPrototype NoParameterForm\">ChannelGroups channelGroups() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ChannelGroups for the Wireless Node.</div></div>"});