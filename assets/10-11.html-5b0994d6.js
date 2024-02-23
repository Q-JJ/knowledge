import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as s,a,b as e,d as l,f as d}from"./app-131d0148.js";const r={},c=e("h1",{id:"重温linux",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#重温linux","aria-hidden":"true"},"#"),l(" 重温Linux")],-1),t=e("p",null,"最近要给公司服务器安装Oracle数据库，发现太久没有接触Linux，相关操作都生疏了。借着这次机会重温下Linux。",-1),v=d(`<p>在安装数据库之前，需要对新服务器的硬盘进行挂载初始化。需要用到以下指令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>查看磁盘信息：df -h

查看挂载信息：lsblk -l

查看详细信息：lsblk -f

查看磁盘UUID：blkid  &lt;磁盘名&gt;

挂载：mount -a

设置永久挂载：vi /etc/fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装linux-oracle-8-6" tabindex="-1"><a class="header-anchor" href="#安装linux-oracle-8-6" aria-hidden="true">#</a> 安装Linux Oracle 8.6</h2><h3 id="配置网卡" tabindex="-1"><a class="header-anchor" href="#配置网卡" aria-hidden="true">#</a> 配置网卡</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost ~]# vi /etc/sysconfig/network-scripts/ifcfg-eth0

DEVICE=eth0     #网卡设备名称

ONBOOT=yes      #启动时是否激活 yes | no

BOOTPROTO=static        #协议类型

IPADDR=192.168.1.90     #网络IP地址

NETMASK=255.255.255.0       #网络子网地址

GATEWAY=192.168.1.1     #网关地址

BROADCAST=192.168.1.255     #广播地址

HWADDR=00:0C:29:FE:1A:09        #网卡MAC地址

TYPE=Ethernet       #网卡类型为以太网
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="防火墙" tabindex="-1"><a class="header-anchor" href="#防火墙" aria-hidden="true">#</a> 防火墙</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>开启：service firewalld start

查看状态：systemctl status firewalld

开启防火墙：systemctl start firewalld

关闭防火墙：systemctl stop firewalld

禁用防火墙：systemctl disable firewalld

查看已开放的端口：netstat -ntulp |grep 1521

查询指定端口：firewall-cmd --query-port=666/tcp



查看端口是否对外开放：firewall-cmd --quer-port=1521/tcp

添加指定需要开放的端口：firewall-cmd --add-port=123/tcp --permanent

重新加载：firewall-cmd --reload

查询指定端口是否开启成功：firewall-cmd --query-port=123/tcp

移除指定端口：firewall-cmd --remove-port=123/tcp --permanent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="oracle" tabindex="-1"><a class="header-anchor" href="#oracle" aria-hidden="true">#</a> oracle</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>查看监听状态：lsnrctl status

启动监听：lsnrctl start

关闭监听：lsnrctl stop

登录数据库：sqlplus / as sysdba

启动Oracle服务：startup

停止服务：shutdown
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linux-设置-oracle-开机自启" tabindex="-1"><a class="header-anchor" href="#linux-设置-oracle-开机自启" aria-hidden="true">#</a> linux 设置(oracle)开机自启</h3><ol><li><p>以root身份进入/etc目录：/etc/rc.d/rc.local 用于添加开机启动命令；/etc/rc.local是/etc/rc.d/rc.local的软连接</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc
ll rc.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看/etc/rc.d/rc.local文件和/etc/oratab的权限，若没有文件执行权限，则通过chmod修改</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">755</span> /etc/oratab
<span class="token function">chmod</span> <span class="token number">755</span> /etc/rc.d/rc.local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改/etc/oratab，将N改为Y</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>orcl:/u01/app/oracle/product/19.3.0:Y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>修改/etc/rc.d/rc.local，添加以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">su</span> oracle <span class="token parameter variable">-lc</span> <span class="token string">&quot;u01/app/oracle/product/19.3.0/bin/lsnrctl start&quot;</span>
<span class="token function">su</span> oracle <span class="token parameter variable">-lc</span> <span class="token string">&quot;u01/app/oracle/product/19.3.0/bin/dbstart&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（其他需要自启的服务也可以在里面配置）</p></li><li><p>重启服务器</p></li><li><p>查看监听端口状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">netstat</span> <span class="token parameter variable">-ntulp</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token number">1521</span>
lsnrctl status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,11);function u(m,o){return i(),s("div",null,[c,t,a(" more "),v])}const h=n(r,[["render",u],["__file","10-11.html.vue"]]);export{h as default};
