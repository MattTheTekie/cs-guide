import{_ as l,r as i,o as p,c,d as a,e as n,b as e,a as t}from"./app-3d979d38.js";const o={},r=t('<h1 id="fastdfs-结合-graphicsmagick" tabindex="-1"><a class="header-anchor" href="#fastdfs-结合-graphicsmagick" aria-hidden="true">#</a> FastDFS 结合 GraphicsMagick</h1><h2 id="单机安装部署-centos-6-7-环境" tabindex="-1"><a class="header-anchor" href="#单机安装部署-centos-6-7-环境" aria-hidden="true">#</a> 单机安装部署（CentOS 6.7 环境）</h2><h3 id="先安装-fastdfs" tabindex="-1"><a class="header-anchor" href="#先安装-fastdfs" aria-hidden="true">#</a> 先安装 FastDFS</h3>',3),u={href:"http://pan.baidu.com/s/1hsg2brA",target:"_blank",rel:"noopener noreferrer"},d=t(`<li>安装依赖包：<code>yum install -y gcc gcc-c++ pcre pcre-devel zlib zlib-devel openssl openssl-devel libevent</code></li><li>安装 <strong>libfastcommon-1.0.7.tar.gz</strong><ul><li>解压：<code>tar zxvf libfastcommon-1.0.7.tar.gz</code></li><li>进入解压后目录：<code>cd libfastcommon-1.0.7/</code></li><li>编译：<code>./make.sh</code></li><li>安装：<code>./make.sh install</code></li><li>设置几个软链接：<code>ln -s /usr/lib64/libfastcommon.so /usr/local/lib/libfastcommon.so</code></li><li>设置几个软链接：<code>ln -s /usr/lib64/libfastcommon.so /usr/lib/libfastcommon.so</code></li><li>设置几个软链接：<code>ln -s /usr/lib64/libfdfsclient.so /usr/local/lib/libfdfsclient.so</code></li><li>设置几个软链接：<code>ln -s /usr/lib64/libfdfsclient.so /usr/lib/libfdfsclient.so</code></li></ul></li><li>安装 tracker （跟踪器）服务 <strong>FastDFS_v5.08.tar.gz</strong><ul><li>解压：<code>tar zxvf FastDFS_v5.05.tar.gz</code></li><li>进入解压后目录：<code>cd FastDFS/</code></li><li>编译：<code>./make.sh</code></li><li>安装：<code>./make.sh install</code></li></ul></li><li>配置 tracker 服务 <ul><li><p>复制一份配置文件：<code>cp /etc/fdfs/tracker.conf.sample /etc/fdfs/tracker.conf</code></p></li><li><p>编辑：<code>vim /etc/fdfs/tracker.conf</code>，编辑内容看下面中文注释</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">disabled</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">bind_addr</span><span class="token punctuation">=</span>
<span class="token key attr-name">port</span><span class="token punctuation">=</span><span class="token value attr-value">22122</span>
<span class="token key attr-name">connect_timeout</span><span class="token punctuation">=</span><span class="token value attr-value">30</span>
<span class="token key attr-name">network_timeout</span><span class="token punctuation">=</span><span class="token value attr-value">60</span>
<span class="token comment"># 下面这个路径是保存 store data 和 log 的地方，需要我们改下，指向我们一个存在的目录</span>
<span class="token comment"># 创建目录：mkdir -p /opt/fastdfs/tracker/data-and-log</span>
<span class="token key attr-name">base_path</span><span class="token punctuation">=</span><span class="token value attr-value">/opt/fastdfs/tracker/data-and-log</span>
<span class="token key attr-name">max_connections</span><span class="token punctuation">=</span><span class="token value attr-value">256</span>
<span class="token key attr-name">accept_threads</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">work_threads</span><span class="token punctuation">=</span><span class="token value attr-value">4</span>
<span class="token key attr-name">store_lookup</span><span class="token punctuation">=</span><span class="token value attr-value">2</span>
<span class="token key attr-name">store_group</span><span class="token punctuation">=</span><span class="token value attr-value">group2</span>
<span class="token key attr-name">store_server</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">store_path</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">download_server</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">reserved_storage_space</span> <span class="token punctuation">=</span> <span class="token value attr-value">10%</span>
<span class="token key attr-name">log_level</span><span class="token punctuation">=</span><span class="token value attr-value">info</span>
<span class="token key attr-name">run_by_group</span><span class="token punctuation">=</span>
<span class="token key attr-name">run_by_user</span><span class="token punctuation">=</span>
<span class="token key attr-name">allow_hosts</span><span class="token punctuation">=</span><span class="token value attr-value">*</span>
<span class="token key attr-name">sync_log_buff_interval</span> <span class="token punctuation">=</span> <span class="token value attr-value">10</span>
<span class="token key attr-name">check_active_interval</span> <span class="token punctuation">=</span> <span class="token value attr-value">120</span>
<span class="token key attr-name">thread_stack_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">64KB</span>
<span class="token key attr-name">storage_ip_changed_auto_adjust</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">storage_sync_file_max_delay</span> <span class="token punctuation">=</span> <span class="token value attr-value">86400</span>
<span class="token key attr-name">storage_sync_file_max_time</span> <span class="token punctuation">=</span> <span class="token value attr-value">300</span>
<span class="token key attr-name">use_trunk_file</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span> 
<span class="token key attr-name">slot_min_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">256</span>
<span class="token key attr-name">slot_max_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">16MB</span>
<span class="token key attr-name">trunk_file_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">64MB</span>
<span class="token key attr-name">trunk_create_file_advance</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
<span class="token key attr-name">trunk_create_file_time_base</span> <span class="token punctuation">=</span> <span class="token value attr-value">02:00</span>
<span class="token key attr-name">trunk_create_file_interval</span> <span class="token punctuation">=</span> <span class="token value attr-value">86400</span>
<span class="token key attr-name">trunk_create_file_space_threshold</span> <span class="token punctuation">=</span> <span class="token value attr-value">20G</span>
<span class="token key attr-name">trunk_init_check_occupying</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
<span class="token key attr-name">trunk_init_reload_from_binlog</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
<span class="token key attr-name">trunk_compress_binlog_min_interval</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
<span class="token key attr-name">use_storage_id</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
<span class="token key attr-name">storage_ids_filename</span> <span class="token punctuation">=</span> <span class="token value attr-value">storage_ids.conf</span>
<span class="token key attr-name">id_type_in_filename</span> <span class="token punctuation">=</span> <span class="token value attr-value">ip</span>
<span class="token key attr-name">store_slave_file_use_link</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
<span class="token key attr-name">rotate_error_log</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
<span class="token key attr-name">error_log_rotate_time</span><span class="token punctuation">=</span><span class="token value attr-value">00:00</span>
<span class="token key attr-name">rotate_error_log_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
<span class="token key attr-name">log_file_keep_days</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
<span class="token key attr-name">use_connection_pool</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
<span class="token key attr-name">connection_pool_max_idle_time</span> <span class="token punctuation">=</span> <span class="token value attr-value">3600</span>
<span class="token key attr-name">http.server_port</span><span class="token punctuation">=</span><span class="token value attr-value">8080</span>
<span class="token key attr-name">http.check_alive_interval</span><span class="token punctuation">=</span><span class="token value attr-value">30</span>
<span class="token key attr-name">http.check_alive_type</span><span class="token punctuation">=</span><span class="token value attr-value">tcp</span>
<span class="token key attr-name">http.check_alive_uri</span><span class="token punctuation">=</span><span class="token value attr-value">/status.html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动 tracker 服务：<code>/usr/bin/fdfs_trackerd /etc/fdfs/tracker.conf</code></p></li><li><p>重启 tracker 服务：<code>/usr/bin/fdfs_trackerd /etc/fdfs/tracker.conf restart</code></p></li><li><p>查看是否有 tracker 进程：<code>ps aux | grep tracker</code></p></li></ul></li><li>storage （存储节点）服务部署 <ul><li><p>一般 storage 服务我们会单独装一台机子，但是这里为了方便我们安装在同一台。</p></li><li><p>如果 storage 单独安装的话，那上面安装的步骤都要在走一遍，只是到了编辑配置文件的时候，编辑的是 storage.conf 而已</p></li><li><p>复制一份配置文件：<code>cp /etc/fdfs/storage.conf.sample /etc/fdfs/storage.conf</code></p></li><li><p>编辑：<code>vim /etc/fdfs/storage.conf</code>，编辑内容看下面中文注释</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">disabled</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">group_name</span><span class="token punctuation">=</span><span class="token value attr-value">group1</span>
<span class="token key attr-name">bind_addr</span><span class="token punctuation">=</span>
<span class="token key attr-name">client_bind</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">port</span><span class="token punctuation">=</span><span class="token value attr-value">23000</span>
<span class="token key attr-name">connect_timeout</span><span class="token punctuation">=</span><span class="token value attr-value">30</span>
<span class="token key attr-name">network_timeout</span><span class="token punctuation">=</span><span class="token value attr-value">60</span>
<span class="token key attr-name">heart_beat_interval</span><span class="token punctuation">=</span><span class="token value attr-value">30</span>
<span class="token key attr-name">stat_report_interval</span><span class="token punctuation">=</span><span class="token value attr-value">60</span>
<span class="token comment"># 下面这个路径是保存 store data 和 log 的地方，需要我们改下，指向我们一个存在的目录</span>
<span class="token comment"># 创建目录：mkdir -p /opt/fastdfs/storage/data-and-log</span>
<span class="token key attr-name">base_path</span><span class="token punctuation">=</span><span class="token value attr-value">/opt/fastdfs/storage/data-and-log</span>
<span class="token key attr-name">max_connections</span><span class="token punctuation">=</span><span class="token value attr-value">256</span>
<span class="token key attr-name">buff_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">256KB</span>
<span class="token key attr-name">accept_threads</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">work_threads</span><span class="token punctuation">=</span><span class="token value attr-value">4</span>
<span class="token key attr-name">disk_rw_separated</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">disk_reader_threads</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token key attr-name">disk_writer_threads</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token key attr-name">sync_wait_msec</span><span class="token punctuation">=</span><span class="token value attr-value">50</span>
<span class="token key attr-name">sync_interval</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">sync_start_time</span><span class="token punctuation">=</span><span class="token value attr-value">00:00</span>
<span class="token key attr-name">sync_end_time</span><span class="token punctuation">=</span><span class="token value attr-value">23:59</span>
<span class="token key attr-name">write_mark_file_freq</span><span class="token punctuation">=</span><span class="token value attr-value">500</span>
<span class="token key attr-name">store_path_count</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token comment"># 图片实际存放路径，如果有多个，这里可以有多行：</span>
<span class="token comment"># store_path0=/opt/fastdfs/storage/images-data0</span>
<span class="token comment"># store_path1=/opt/fastdfs/storage/images-data1</span>
<span class="token comment"># store_path2=/opt/fastdfs/storage/images-data2</span>
<span class="token comment"># 创建目录：mkdir -p /opt/fastdfs/storage/images-data</span>
<span class="token key attr-name">store_path0</span><span class="token punctuation">=</span><span class="token value attr-value">/opt/fastdfs/storage/images-data</span>
<span class="token key attr-name">subdir_count_per_path</span><span class="token punctuation">=</span><span class="token value attr-value">256</span>
<span class="token comment"># 指定 tracker 服务器的 IP 和端口</span>
<span class="token key attr-name">tracker_server</span><span class="token punctuation">=</span><span class="token value attr-value">192.168.1.114:22122</span>
<span class="token key attr-name">log_level</span><span class="token punctuation">=</span><span class="token value attr-value">info</span>
<span class="token key attr-name">run_by_group</span><span class="token punctuation">=</span>
<span class="token key attr-name">run_by_user</span><span class="token punctuation">=</span>
<span class="token key attr-name">allow_hosts</span><span class="token punctuation">=</span><span class="token value attr-value">*</span>
<span class="token key attr-name">file_distribute_path_mode</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">file_distribute_rotate_count</span><span class="token punctuation">=</span><span class="token value attr-value">100</span>
<span class="token key attr-name">fsync_after_written_bytes</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">sync_log_buff_interval</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>
<span class="token key attr-name">sync_binlog_buff_interval</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>
<span class="token key attr-name">sync_stat_file_interval</span><span class="token punctuation">=</span><span class="token value attr-value">300</span>
<span class="token key attr-name">thread_stack_size</span><span class="token punctuation">=</span><span class="token value attr-value">512KB</span>
<span class="token key attr-name">upload_priority</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>
<span class="token key attr-name">if_alias_prefix</span><span class="token punctuation">=</span>
<span class="token key attr-name">check_file_duplicate</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">file_signature_method</span><span class="token punctuation">=</span><span class="token value attr-value">hash</span>
<span class="token key attr-name">key_namespace</span><span class="token punctuation">=</span><span class="token value attr-value">FastDFS</span>
<span class="token key attr-name">keep_alive</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">use_access_log</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
<span class="token key attr-name">rotate_access_log</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
<span class="token key attr-name">access_log_rotate_time</span><span class="token punctuation">=</span><span class="token value attr-value">00:00</span>
<span class="token key attr-name">rotate_error_log</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
<span class="token key attr-name">error_log_rotate_time</span><span class="token punctuation">=</span><span class="token value attr-value">00:00</span>
<span class="token key attr-name">rotate_access_log_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
<span class="token key attr-name">rotate_error_log_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
<span class="token key attr-name">log_file_keep_days</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
<span class="token key attr-name">file_sync_skip_invalid_record</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">use_connection_pool</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
<span class="token key attr-name">connection_pool_max_idle_time</span> <span class="token punctuation">=</span> <span class="token value attr-value">3600</span>
<span class="token key attr-name">http.domain_name</span><span class="token punctuation">=</span>
<span class="token key attr-name">http.server_port</span><span class="token punctuation">=</span><span class="token value attr-value">8888</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>启动 storage 服务：<code>/usr/bin/fdfs_storaged /etc/fdfs/storage.conf</code>，首次启动会很慢，因为它在创建预设存储文件的目录</p></li><li><p>重启 storage 服务：<code>/usr/bin/fdfs_storaged /etc/fdfs/storage.conf restart</code></p></li><li><p>查看是否有 storage 进程：<code>ps aux | grep storage</code></p></li></ul></li><li>测试是否部署成功 <ul><li><p>利用自带的 client 进行测试</p></li><li><p>复制一份配置文件：<code>cp /etc/fdfs/client.conf.sample /etc/fdfs/client.conf</code></p></li><li><p>编辑：<code>vim /etc/fdfs/client.conf</code>，编辑内容看下面中文注释</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">connect_timeout</span><span class="token punctuation">=</span><span class="token value attr-value">30</span>
<span class="token key attr-name">network_timeout</span><span class="token punctuation">=</span><span class="token value attr-value">60</span>
<span class="token comment"># 下面这个路径是保存 store log 的地方，需要我们改下，指向我们一个存在的目录</span>
<span class="token comment"># 创建目录：mkdir -p /opt/fastdfs/client/data-and-log</span>
<span class="token key attr-name">base_path</span><span class="token punctuation">=</span><span class="token value attr-value">/opt/fastdfs/client/data-and-log</span>
<span class="token comment"># 指定 tracker 服务器的 IP 和端口</span>
<span class="token key attr-name">tracker_server</span><span class="token punctuation">=</span><span class="token value attr-value">192.168.1.114:22122</span>
<span class="token key attr-name">log_level</span><span class="token punctuation">=</span><span class="token value attr-value">info</span>
<span class="token key attr-name">use_connection_pool</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
<span class="token key attr-name">connection_pool_max_idle_time</span> <span class="token punctuation">=</span> <span class="token value attr-value">3600</span>
<span class="token key attr-name">load_fdfs_parameters_from_tracker</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">use_storage_id</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
<span class="token key attr-name">storage_ids_filename</span> <span class="token punctuation">=</span> <span class="token value attr-value">storage_ids.conf</span>
<span class="token key attr-name">http.tracker_server_port</span><span class="token punctuation">=</span><span class="token value attr-value">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在终端中通过 shell 上传 opt 目录下的一张图片：<code>/usr/bin/fdfs_test /etc/fdfs/client.conf upload /opt/test.jpg</code></p></li><li><p>如下图箭头所示，生成的图片地址为：<code>http://192.168.1.114/group1/M00/00/00/wKgBclb0aqWAbVNrAAAjn7_h9gM813_big.jpg</code></p></li><li><p>即使我们现在知道图片的访问地址我们也访问不了，因为我们还没装 FastDFS 的 Nginx 模块</p></li></ul></li>`,6),v=a("h3",{id:"安装-nginx-lua-graphicsmagick",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#安装-nginx-lua-graphicsmagick","aria-hidden":"true"},"#"),n(" 安装 nginx-lua-GraphicsMagick")],-1),k={href:"https://github.com/yanue/nginx-lua-GraphicsMagick/blob/master/nginx-install.md",target:"_blank",rel:"noopener noreferrer"},m=t(`<li>添加专用用户，后面有用 <ul><li><code>groupadd www</code></li><li><code>useradd -g www www -s /bin/false</code></li></ul></li><li>安装依赖包 <ul><li><code>yum install -y gcc gcc-c++ zlib zlib-devel openssl openssl-devel pcre pcre-devel</code></li><li><code>yum install -y libpng libjpeg libpng-devel libjpeg-devel ghostscript libtiff libtiff-devel freetype freetype-devel</code></li><li><code>yum install -y GraphicsMagick GraphicsMagick-devel</code></li></ul></li><li>下面的这些软件都在本文在开头的那个压缩包里面。现在我们需要解压这些压缩包 <ul><li><code>cd /opt/setups</code></li><li><code>tar -zxvf nginx-1.8.0.tar.gz</code></li><li><code>tar -zxvf LuaJIT-2.0.4.tar.gz</code></li><li><code>tar -zxvf GraphicsMagick-1.3.21.tar.gz</code></li><li><code>tar -zxvf zlib-1.2.8.tar.gz</code></li></ul></li><li>安装 LuaJIT <ul><li><code>cd /opt/setups/LuaJIT-2.0.4</code></li><li><code>make</code></li><li><code>make install</code></li><li><code>export LUAJIT_LIB=/usr/local/lib</code></li><li><code>export LUAJIT_INC=/usr/local/include/luajit-2.0</code></li><li><code>ln -s /usr/local/lib/libluajit-5.1.so.2 /lib64/libluajit-5.1.so.2</code></li></ul></li><li>修改一些配置文件 <ul><li><p>编辑 Nginx 模块的配置文件：<code>vim /opt/setups/fastdfs-nginx-module/src/config</code></p></li><li><p>找到下面一行包含有 <code>local</code> 字眼去掉，因为这三个路径根本不是在 local 目录下的。（如果你的配置文件没有这个 local，那这一步跳过）</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>CORE_INCS=&quot;$CORE_INCS /usr/local/include/fastdfs /usr/local/include/fastcommon/&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>改为如下：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>CORE_INCS=&quot;$CORE_INCS /usr/include/fastdfs /usr/include/fastcommon/&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>复制文件：<code>cp /opt/setups/FastDFS/conf/http.conf /etc/fdfs</code></p></li><li><p>复制文件：<code>cp /opt/setups/FastDFS/conf/mime.types /etc/fdfs</code></p></li></ul></li><li>开始安装 Nginx <ul><li><code>cd /opt/setups/nginx-1.8.0</code></li><li><code>mkdir -p /usr/local/nginx /var/log/nginx /var/temp/nginx /var/lock/nginx</code></li><li>执行下面编译语句：</li></ul></li>`,6),_=t(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>   ./configure --prefix=/usr/local/nginx \\
   --user=www \\
   --group=www \\
   --pid-path=/var/local/nginx/nginx.pid  \\
   --lock-path=/var/lock/nginx/nginx.lock \\
   --error-log-path=/var/log/nginx/error.log \\
   --http-log-path=/var/log/nginx/access.log \\
   --http-client-body-temp-path=/var/temp/nginx/client \\
   --http-proxy-temp-path=/var/temp/nginx/proxy \\
   --http-fastcgi-temp-path=/var/temp/nginx/fastcgi \\
   --http-uwsgi-temp-path=/var/temp/nginx/uwsgi \\
   --http-scgi-temp-path=/var/temp/nginx/scgi \\
   --sbin-path=/usr/local/nginx/sbin/nginx \\
   --with-http_ssl_module \\
   --with-http_realip_module \\
   --with-http_sub_module \\
   --with-http_flv_module \\
   --with-http_dav_module \\
   --with-http_gzip_static_module \\
   --with-http_stub_status_module \\
   --with-http_addition_module \\
   --with-http_spdy_module \\
   --with-pcre \\
   --with-zlib=/opt/setups/zlib-1.2.8 \\
   --add-module=/opt/setups/nginx-http-concat \\
   --add-module=/opt/setups/lua-nginx-module \\
   --add-module=/opt/setups/ngx_devel_kit \\
   --add-module=/opt/setups/fastdfs-nginx-module/src
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>make</code></li><li><code>make install</code></li><li>修改一下配置 <ul><li><p>复制 Nginx 模块的配置文件：<code>cp /opt/setups/fastdfs-nginx-module/src/mod_fastdfs.conf /etc/fdfs</code></p></li><li><p>编辑 Nginx 模块的配置文件：<code>vim /etc/fdfs/mod_fastdfs.conf</code>，编辑内容看下面中文注释</p></li><li><p>如果在已经启动 Nginx 的情况下修改下面内容记得要重启 Nginx。</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">connect_timeout</span><span class="token punctuation">=</span><span class="token value attr-value">2</span>
<span class="token key attr-name">network_timeout</span><span class="token punctuation">=</span><span class="token value attr-value">30</span>
<span class="token comment"># 下面这个路径是保存 log 的地方，需要我们改下，指向我们一个存在的目录</span>
<span class="token comment"># 创建目录：mkdir -p /opt/fastdfs/fastdfs-nginx-module/data-and-log</span>
<span class="token key attr-name">base_path</span><span class="token punctuation">=</span><span class="token value attr-value">/opt/fastdfs/fastdfs-nginx-module/data-and-log</span>
<span class="token key attr-name">load_fdfs_parameters_from_tracker</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">storage_sync_file_max_delay</span> <span class="token punctuation">=</span> <span class="token value attr-value">86400</span>
<span class="token key attr-name">use_storage_id</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
<span class="token key attr-name">storage_ids_filename</span> <span class="token punctuation">=</span> <span class="token value attr-value">storage_ids.conf</span>
<span class="token comment"># 指定 tracker 服务器的 IP 和端口</span>
<span class="token key attr-name">tracker_server</span><span class="token punctuation">=</span><span class="token value attr-value">192.168.1.114:22122</span>
<span class="token key attr-name">storage_server_port</span><span class="token punctuation">=</span><span class="token value attr-value">23000</span>
<span class="token key attr-name">group_name</span><span class="token punctuation">=</span><span class="token value attr-value">group1</span>
<span class="token comment"># 因为我们访问图片的地址是：http://192.168.1.114/group1/M00/00/00/wKgBclb0aqWAbVNrAAAjn7_h9gM813_big.jpg</span>
<span class="token comment"># 该地址前面是带有 /group1/M00，所以我们这里要使用 true，不然访问不到（原值是 false）</span>
<span class="token key attr-name">url_have_group_name</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">store_path_count</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token comment"># 图片实际存放路径，如果有多个，这里可以有多行：</span>
<span class="token comment"># store_path0=/opt/fastdfs/storage/images-data0</span>
<span class="token comment"># store_path1=/opt/fastdfs/storage/images-data1</span>
<span class="token comment"># store_path2=/opt/fastdfs/storage/images-data2</span>
<span class="token key attr-name">store_path0</span><span class="token punctuation">=</span><span class="token value attr-value">/opt/fastdfs/storage/images-data</span>
<span class="token key attr-name">log_level</span><span class="token punctuation">=</span><span class="token value attr-value">info</span>
<span class="token key attr-name">log_filename</span><span class="token punctuation">=</span>
<span class="token key attr-name">response_mode</span><span class="token punctuation">=</span><span class="token value attr-value">proxy</span>
<span class="token key attr-name">if_alias_prefix</span><span class="token punctuation">=</span>
<span class="token key attr-name">flv_support</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">flv_extension</span> <span class="token punctuation">=</span> <span class="token value attr-value">flv</span>
<span class="token key attr-name">group_count</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建文件夹：<code>mkdir -p /opt/fastdfs/thumb</code></p></li><li><p>编辑 Nginx 配置文件</p></li><li><p><code>vim /usr/local/nginx/conf/nginx.conf</code></p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></li></ul></li></ul><h1 id="注意这一行行-我特别加上了使用-root-用户去执行-不然有些日记目录没有权限访问" tabindex="-1"><a class="header-anchor" href="#注意这一行行-我特别加上了使用-root-用户去执行-不然有些日记目录没有权限访问" aria-hidden="true">#</a> 注意这一行行，我特别加上了使用 root 用户去执行，不然有些日记目录没有权限访问</h1><p>user root; worker_processes 1;</p><p>events { worker_connections 1024; }</p><p>http { include mime.types; default_type application/octet-stream;</p><pre><code> sendfile        on;

 keepalive_timeout  65;
</code></pre><p>server{ listen 80; server_name 192.168.1.112;</p><pre><code>  set $img_thumbnail_root /opt/fastdfs/thumb; 
  set $img_file $img_thumbnail_root$uri;  

  # like：/pic/M00/xx/xx/xx.jpg_200x100.jpg
  # /group1/M00
  location ~* ^(\\/(\\w+)(\\/M00)(.+\\.(jpg|jpeg|gif|png))_(\\d+)+x(\\d+)+\\.(jpg|jpeg|gif|png))$ {
          root $img_thumbnail_root;    
          set $fdfs_group_root /opt/fastdfs/storage/images-data/data; 
 
 # 如果缩略图不存在
          if (!-f $img_file) {   
                  add_header X-Powered-By &#39;Nginx+Lua+GraphicsMagick By Yanue&#39;;  
                  add_header file-path $request_filename;
                  
                  set $request_filepath $fdfs_group_root$4;    
                  set $img_width $6;    
                  set $img_height $7;    
                  set $img_ext $5;     
                  content_by_lua_file /opt/setups/lua/cropSize.lua;   
          }
  }

  location /group1/M00 {
          alias /opt/fastdfs/storage/images-data/data;
          ngx_fastdfs_module;
  }
</code></pre><p>} } \`\`\`</p><ul><li>启动 Nginx <ul><li>停掉防火墙：<code>service iptables stop</code></li><li>启动：<code>/usr/local/nginx/sbin/nginx</code>，启动完成 shell 是不会有输出的</li><li>访问：<code>192.168.1.114</code>，如果能看到：<code>Welcome to nginx!</code>，即可表示安装成功</li><li>检查 时候有 Nginx 进程：<code>ps aux | grep nginx</code>，正常是显示 3 个结果出来</li><li>刷新 Nginx 配置后重启：<code>/usr/local/nginx/sbin/nginx -s reload</code></li><li>停止 Nginx：<code>/usr/local/nginx/sbin/nginx -s stop</code></li><li>如果访问不了，或是出现其他信息看下错误立即：<code>vim /var/log/nginx/error.log</code></li></ul></li></ul><h3 id="多机安装部署-centos-6-7-环境" tabindex="-1"><a class="header-anchor" href="#多机安装部署-centos-6-7-环境" aria-hidden="true">#</a> 多机安装部署（CentOS 6.7 环境）</h3>`,12),b=a("li",null,"多机部署的情况，对生成大小图的 Nginx 也有地方要修改。",-1),g={href:"http://blog.csdn.net/ricciozhang/article/details/49402273",target:"_blank",rel:"noopener noreferrer"},f=a("h2",{id:"资料",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#资料","aria-hidden":"true"},"#"),n(" 资料")],-1),h={href:"http://blog.csdn.net/ricciozhang/article/details/49402273",target:"_blank",rel:"noopener noreferrer"};function y(x,w){const s=i("ExternalLinkIcon");return p(),c("div",null,[r,a("ul",null,[a("li",null,[n("软件准备： "),a("ul",null,[a("li",null,[n("我这边统一提供了一个压缩包，方便使用。 "),a("ul",null,[a("li",null,[n("下载地址："),a("a",u,[n("http://pan.baidu.com/s/1hsg2brA"),e(s)])])])])])]),d]),v,a("ul",null,[a("li",null,[n("来源："),a("a",k,[n("https://github.com/yanue/nginx-lua-GraphicsMagick/blob/master/nginx-install.md"),e(s)])]),m]),_,a("ul",null,[b,a("li",null,[n("资料："),a("a",g,[n("http://blog.csdn.net/ricciozhang/article/details/49402273"),e(s)])])]),f,a("ul",null,[a("li",null,[a("a",h,[n("fastdfs+nginx安装配置"),e(s)])])])])}const N=l(o,[["render",y],["__file","FastDFS-Nginx-Lua-GraphicsMagick.html.vue"]]);export{N as default};
