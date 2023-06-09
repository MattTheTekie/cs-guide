import{_ as n,o as s,c as e,a as i}from"./app-3d979d38.js";const a={},l=i(`<h1 id="mysql配置" tabindex="-1"><a class="header-anchor" href="#mysql配置" aria-hidden="true">#</a> mysql配置</h1><h2 id="配置mysql-1g" tabindex="-1"><a class="header-anchor" href="#配置mysql-1g" aria-hidden="true">#</a> 配置mysql-1g</h2><div class="language-cnf line-numbers-mode" data-ext="cnf"><pre class="language-cnf"><code>
# 适用于 Mysql 5.6
# 该配置适合 1G 内存左右的机子，储存类型为 InnoDB
# 官网配置说明：http://dev.mysql.com/doc/refman/5.6/en/mysqld-option-tables.html
# 官网状态值说明：http://dev.mysql.com/doc/refman/5.6/en/server-status-variables.html
# 官网环境变量说明：http://dev.mysql.com/doc/refman/5.6/en/server-system-variables.html
# 在线生成配置工具：http://tools.percona.com（只是起到一个参考作用，生成的配置文件里面的参数名有的是用符号：-，而官网是用：_，所以这个也要注意改掉。）
# 资料参考：https://blog.linuxeye.com/379.html
# 注释内容为注释行下面的配置的解释
# 这是一个综合配置，不是单独为主库或是从库考虑

# ============================================================================================================


# 客户端设置
[mysql]
port = 3306
socket = /usr/program/mysql/data/mysql.sock
default-character-set = utf8

# ============================================================================================================


# 服务端设置
[mysqld]
user = mysql
port = 3306
default-storage-engine = InnoDB
socket = /usr/program/mysql/data/mysql.sock
pid-file = /usr/program/mysql/data/mysql.pid

collation-server = utf8_general_ci
init_connect = &#39;SET NAMES utf8&#39;
character-set-server = utf8
basedir = /usr/program/mysql
datadir = /usr/program/mysql/data
log-error = /usr/program/mysql/data/mysql-error.log

# （重点修改）表示是本机的序号为1,一般配合设置主从的时候一定要修改的地方
server-id = 1

# 从库特有的设置 start
read_only = true
# 从库不自动开启主从设置，需要使用命令：START SLAVE;
skip-slave-start = true
log-slave-updates = true
relay-log = /usr/program/mysql/data/relay-bin
# 单位秒
slave-net-timeout = 60
sync_master_info = 1
sync_relay_log = 1
sync_relay_log_info = 1
# 从库特有的设置 end

# back_log 值指出在 MySQL 暂时停止回答新请求之前的短时间内多少个请求可以被存在堆栈中。如果 MySQL 的连接数据达到 max_connections 时，新来的请求将会被存在堆栈中，以等待某一连接释放资源，该堆栈的数量即 back_log，如果等待连接的数量超过 back_log，将不被授予连接资源。
# 另外，这值（back_log）限于您的操作系统对到来的 TCP/IP 连接的侦听队列的大小。你的操作系统在这个队列大小上有它自己的限制（可以检查你的 OS 文档找出这个变量的最大值），试图设定 back_log 高于你的操作系统的限制将是无效的。  
back_log = 512

# MySQL 的最大并发连接数
max_connections = 1000
# 网络传输中一次小心传输量的最大值（最大值为 1G）；增加该变量的值十分安全，这是因为仅当需要时才会分配额外内存。例如，仅当你发出长查询或 MySQL 必须返回大的结果行时 MySQL 才会分配更多内存。该变量之所以取较小默认值是一种预防措施，以捕获客户端和服务器之间的错误信息包，并确保不会因偶然使用大的信息包而导致内存溢出。  
max_allowed_packet = 16M
# 对于同一主机，如果有超出该参数值个数的中断错误连接，则该主机将被禁止连接。如需对该主机进行解禁，执行 Mysql 命令：FLUSH HOST。
max_connect_errors = 1000000
# 禁止MySQL对外部连接进行DNS解析，使用这一选项可以消除MySQL进行DNS解析的时间。但需要注意，如果开启该选项，则所有远程主机连接授权都要使用IP地址方式，否则MySQL将无法正常处理连接请求 
skip-name-resolve
# MySQL打开的文件描述符限制
open_files_limit = 65535
# MySQL 每打开一个表，都会读入一些数据到 table_open_cache 缓存中，当 MySQL 在这个缓存中找不到相应信息时，才会去磁盘上读取。默认值 400，最大值：524288。假定系统有 200 个并发连接，则需将此参数设置为 200*N (N 为每个连接所需的文件描述符数目)；当把 table_open_cache 设置为很大时，如果系统处理不了那么多文件描述符，那么就会出现客户端失效，连接不上  
table_open_cache = 2048 

# 一个事务，在没有提交的时候，产生的日志，记录到 Cache 中；等到事务提交需要提交的时候，则把日志持久化到磁盘。默认 binlog_cache_size 大小32K
binlog_cache_size = 1M
# 定义了用户可以创建的内存表(memory table)的大小。这个值用来计算内存表的最大行数值。这个变量支持动态改变  
max_heap_table_size = 32M
# MySQL的heap（堆积）表缓冲大小。如果超过该值，则会将临时表写入磁盘。其范围值:1KB~4GB
tmp_table_size = 32M

# MySQL读入缓冲区大小。该参数对应的分配内存也是每连接独享，所以，如果有100连接，那占用的内存是：100X2M=200M，所以4G内存的服务器，建议该值是6~8M
read_buffer_size = 2M
# MySQL的随机读缓冲区大小。
read_rnd_buffer_size = 8M
# MySQL执行排序使用的缓冲大小。该参数对应的分配内存也是每连接独享，所以，如果有100连接，那占用的内存是：100X2M=200M，所以4G内存的服务器，建议该值是6~8M
sort_buffer_size = 2M
# 联合查询操作所能使用的缓冲区大小，和sort_buffer_size一样，该参数对应的分配内存也是每连接独享，所以，如果有100连接，那占用的内存是：100X4M=400M，所以4G内存的服务器，建议该值是6~8M
join_buffer_size = 4M
# 指定用于索引的缓冲区大小，增加它可得到更好处理的索引(对所有读和多重写)，对于4GB内存的服务器，该参数可以设置为：256M或384M
key_buffer_size = 64M
# 这个值（默认8）表示可以重新利用保存在缓存中线程的数量，当断开连接时如果缓存中还有空间，那么客户端的线程将被放到缓存中，  
# 根据物理内存设置规则如下：  
# 1G  —&gt; 8  
# 2G  —&gt; 16  
# 3G  —&gt; 32  
# 大于3G  —&gt; 64  
thread_cache_size = 8

# 每个线程的堆栈大小，值范围：128K ~ 4GB，默认是192KB
thread_stack = 256k

# 0是关闭高速缓存，1是开启高速缓存
query_cache_type = 1
# 查询缓冲区的大小，如果是4G内存建议设置为64M。具体设置值还要根据运行环境来判断，你可以执行这个SQL语句：show status like &#39;Qcache%&#39;;
# 从SQL语句查询的结果中，查看Qcache_lowmem_prunes的值非常大表示查询缓冲不够，你应该增加该设置值
query_cache_size = 8M
query_cache_limit = 2M

# 分词词汇最小长度，默认4  
ft_min_word_len = 4

log-bin = /usr/program/mysql/data/mysql-bin
binlog-format = mixed
expire_logs_days = 30
# 该参数的说明：http://blog.csdn.net/wulantian/article/details/9965905
sync_binlog = 0

# 是否开启慢查询记录，1表示开启，0表示关闭，如果是主从环境下，主库不要开启，从库开启
slow_query_log = 1
# 慢查询时间 超过3秒则为慢查询  
long_query_time = 3
slow_query_log_file = /usr/program/mysql/data/mysql-slow.log  

performance_schema = 0
# 改参数的说明：http://www.cnblogs.com/digdeep/p/4727715.html
explicit_defaults_for_timestamp = true

# 数据库库名/表名是否区分大小写，0：区分大小写，1：不区分大小写
lower_case_table_names = 1

# MySQL选项以避免外部锁定，减少出错几率，增强稳定性
skip_external_locking


# 在网络上不允许TCP/IP连接到MySQL。所有到MySQL的连接必须经由Unix socket进行。如果要允许TCP/IP连接，则注释当前行即可
# skip-networking


table_definition_cache = 1024

# 该设置值取值为：服务器机子的逻辑CPU数量X2，比如你的服务器机子是 Linux 系统你可以执行：grep &#39;processor&#39; /proc/cpuinfo | sort -u | wc -l，可以查看到逻辑CPU数量值，比如我取到的值是24，那我这里应该设置为：24X2=48
thread_concurrency = 2

# 强制为 innodb类型
innodb = FORCE
innodb_file_per_table = 1
# 限制Innodb能打开的表的数据，如果库里的表特别多的情况，请增加这个。这个值默认是300  
innodb_open_files = 500
# InnoDB使用一个缓冲池来保存索引和原始数据, 不像MyISAM.  
# 这里你设置越大,你在存取表里面数据时所需要的磁盘I/O越少.  
# 在一个独立使用的数据库服务器上,你可以设置这个变量到服务器物理内存大小的70%左右  
# 不要设置过大,否则,由于物理内存的竞争可能导致操作系统的换页颠簸.  
innodb_buffer_pool_size = 592M

# innodb使用后台线程处理数据页上的读写 I/O(输入输出)请求,根据你的 CPU 核数来更改,默认是4  
# 注:这两个参数不支持动态改变,需要把该参数加入到my.cnf里，修改完后重启MySQL服务,允许值的范围从 1-64  
innodb_write_io_threads = 4
innodb_read_io_threads = 4

# 默认设置为 0,表示不限制并发数，这里推荐设置为0，更好去发挥CPU多核处理能力，提高并发量  
innodb_thread_concurrency = 0
innodb_purge_threads = 1
innodb_flush_log_at_trx_commit = 1
innodb_log_buffer_size = 2M
innodb_log_file_size = 64M
innodb_log_files_in_group = 3
innodb_max_dirty_pages_pct = 90
innodb_lock_wait_timeout = 120
innodb_additional_mem_pool_size = 2M
bulk_insert_buffer_size = 8M
# 用于设置在 REPAIR TABLE 和 CREATE INDEX 创建索引或 ALTER TABLE 的过程中排序索引所分配的缓冲区大小，可设置范围：4MB~4GB，默认8MB，4G内存的服务器可以设置为32M~64M
myisam_sort_buffer_size = 8M
# 32位系统默认值是2147483648=2G，64位系统，默认值是9223372036854775807，单位是bytes.
myisam_max_sort_file_size = 100G
myisam_repair_threads = 1

# 服务器关闭交互式连接前等待活动的秒数。单位秒
interactive_timeout = 28800
# 服务器关闭非交互连接之前等待活动的秒数。单位秒。通过show processlist命令查看当前系统的连接状态，如果发现有大量的sleep状态的连接进程，则说明该参数设置的过大。默认值:28800 
wait_timeout = 3600

# ============================================================================================================

[mysqldump]
quick
# 服务器发送和接受的最大包长度
max_allowed_packet = 16M

[myisamchk]
key_buffer_size = 8M
sort_buffer_size = 8M
read_buffer = 4M
write_buffer = 4M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cnf line-numbers-mode" data-ext="cnf"><pre class="language-cnf"><code>
# 适用于 Mysql 5.6
# 该配置适合 1G 内存左右的机子，储存类型为 InnoDB
# 官网配置说明：http://dev.mysql.com/doc/refman/5.6/en/mysqld-option-tables.html
# 官网状态值说明：http://dev.mysql.com/doc/refman/5.6/en/server-status-variables.html
# 官网环境变量说明：http://dev.mysql.com/doc/refman/5.6/en/server-system-variables.html
# 在线生成配置工具：http://tools.percona.com（只是起到一个参考作用，生成的配置文件里面的参数名有的是用符号：-，而官网是用：_，所以这个也要注意改掉。）
# 资料参考：https://blog.linuxeye.com/379.html
# 注释内容为注释行下面的配置的解释
# 这是一个综合配置，不是单独为主库或是从库考虑

# ============================================================================================================


# 客户端设置
[mysql]
port = 3306
socket = /usr/program/mysql/data/mysql.sock
default-character-set = utf8

# ============================================================================================================


# 服务端设置
[mysqld]
user = mysql
port = 3306
default-storage-engine = InnoDB
socket = /usr/program/mysql/data/mysql.sock
pid-file = /usr/program/mysql/data/mysql.pid

collation-server = utf8_general_ci
init_connect = &#39;SET NAMES utf8&#39;
character-set-server = utf8
basedir = /usr/program/mysql
datadir = /usr/program/mysql/data
log-error = /usr/program/mysql/data/mysql-error.log

# （重点修改）表示是本机的序号为1,一般配合设置主从的时候一定要修改的地方
server-id = 1



# back_log 值指出在 MySQL 暂时停止回答新请求之前的短时间内多少个请求可以被存在堆栈中。如果 MySQL 的连接数据达到 max_connections 时，新来的请求将会被存在堆栈中，以等待某一连接释放资源，该堆栈的数量即 back_log，如果等待连接的数量超过 back_log，将不被授予连接资源。
# 另外，这值（back_log）限于您的操作系统对到来的 TCP/IP 连接的侦听队列的大小。你的操作系统在这个队列大小上有它自己的限制（可以检查你的 OS 文档找出这个变量的最大值），试图设定 back_log 高于你的操作系统的限制将是无效的。  
back_log = 512

# MySQL 的最大并发连接数
max_connections = 1000
# 网络传输中一次小心传输量的最大值（最大值为 1G）；增加该变量的值十分安全，这是因为仅当需要时才会分配额外内存。例如，仅当你发出长查询或 MySQL 必须返回大的结果行时 MySQL 才会分配更多内存。该变量之所以取较小默认值是一种预防措施，以捕获客户端和服务器之间的错误信息包，并确保不会因偶然使用大的信息包而导致内存溢出。  
max_allowed_packet = 16M
# 对于同一主机，如果有超出该参数值个数的中断错误连接，则该主机将被禁止连接。如需对该主机进行解禁，执行 Mysql 命令：FLUSH HOST。
max_connect_errors = 1000000
# 禁止MySQL对外部连接进行DNS解析，使用这一选项可以消除MySQL进行DNS解析的时间。但需要注意，如果开启该选项，则所有远程主机连接授权都要使用IP地址方式，否则MySQL将无法正常处理连接请求 
skip-name-resolve
# MySQL打开的文件描述符限制
open_files_limit = 65535
# MySQL 每打开一个表，都会读入一些数据到 table_open_cache 缓存中，当 MySQL 在这个缓存中找不到相应信息时，才会去磁盘上读取。默认值 400，最大值：524288。假定系统有 200 个并发连接，则需将此参数设置为 200*N (N 为每个连接所需的文件描述符数目)；当把 table_open_cache 设置为很大时，如果系统处理不了那么多文件描述符，那么就会出现客户端失效，连接不上  
table_open_cache = 2048 

# 一个事务，在没有提交的时候，产生的日志，记录到 Cache 中；等到事务提交需要提交的时候，则把日志持久化到磁盘。默认 binlog_cache_size 大小32K
binlog_cache_size = 1M
# 定义了用户可以创建的内存表(memory table)的大小。这个值用来计算内存表的最大行数值。这个变量支持动态改变  
max_heap_table_size = 32M
# MySQL的heap（堆积）表缓冲大小。如果超过该值，则会将临时表写入磁盘。其范围值:1KB~4GB
tmp_table_size = 32M

# MySQL读入缓冲区大小。该参数对应的分配内存也是每连接独享，所以，如果有100连接，那占用的内存是：100X2M=200M，所以4G内存的服务器，建议该值是6~8M
read_buffer_size = 2M
# MySQL的随机读缓冲区大小。
read_rnd_buffer_size = 8M
# MySQL执行排序使用的缓冲大小。该参数对应的分配内存也是每连接独享，所以，如果有100连接，那占用的内存是：100X2M=200M，所以4G内存的服务器，建议该值是6~8M
sort_buffer_size = 2M
# 联合查询操作所能使用的缓冲区大小，和sort_buffer_size一样，该参数对应的分配内存也是每连接独享，所以，如果有100连接，那占用的内存是：100X4M=400M，所以4G内存的服务器，建议该值是6~8M
join_buffer_size = 4M
# 指定用于索引的缓冲区大小，增加它可得到更好处理的索引(对所有读和多重写)，对于4GB内存的服务器，该参数可以设置为：256M或384M
key_buffer_size = 64M
# 这个值（默认8）表示可以重新利用保存在缓存中线程的数量，当断开连接时如果缓存中还有空间，那么客户端的线程将被放到缓存中，  
# 根据物理内存设置规则如下：  
# 1G  —&gt; 8  
# 2G  —&gt; 16  
# 3G  —&gt; 32  
# 大于3G  —&gt; 64  
thread_cache_size = 8

# 每个线程的堆栈大小，值范围：128K ~ 4GB，默认是192KB
thread_stack = 256k

# 0是关闭高速缓存，1是开启高速缓存
query_cache_type = 0
# 查询缓冲区的大小，如果是4G内存建议设置为64M。具体设置值还要根据运行环境来判断，你可以执行这个SQL语句：show status like &#39;Qcache%&#39;;
# 从SQL语句查询的结果中，查看Qcache_lowmem_prunes的值非常大表示查询缓冲不够，你应该增加该设置值
query_cache_size = 0
query_cache_limit = 2M

# 分词词汇最小长度，默认4  
ft_min_word_len = 4

log-bin = /usr/program/mysql/data/mysql-bin
binlog-format = mixed
expire_logs_days = 30
# 该参数的说明：http://blog.csdn.net/wulantian/article/details/9965905
sync_binlog = 1

# 是否开启慢查询记录，1表示开启，0表示关闭，如果是主从环境下，主库不要开启，从库开启
slow_query_log = 0
# 慢查询时间 超过3秒则为慢查询  
long_query_time = 3
slow_query_log_file = /usr/program/mysql/data/mysql-slow.log  

performance_schema = 0
# 改参数的说明：http://www.cnblogs.com/digdeep/p/4727715.html
explicit_defaults_for_timestamp = true

# 数据库库名/表名是否区分大小写，0：区分大小写，1：不区分大小写
lower_case_table_names = 1

# MySQL选项以避免外部锁定，减少出错几率，增强稳定性
skip_external_locking


# 在网络上不允许TCP/IP连接到MySQL。所有到MySQL的连接必须经由Unix socket进行。如果要允许TCP/IP连接，则注释当前行即可
# skip-networking


table_definition_cache = 1024

# 该设置值取值为：服务器机子的逻辑CPU数量X2，比如你的服务器机子是 Linux 系统你可以执行：grep &#39;processor&#39; /proc/cpuinfo | sort -u | wc -l，可以查看到逻辑CPU数量值，比如我取到的值是24，那我这里应该设置为：24X2=48
thread_concurrency = 2

# 强制为 innodb类型
innodb = FORCE
innodb_file_per_table = 1
# 限制Innodb能打开的表的数据，如果库里的表特别多的情况，请增加这个。这个值默认是300  
innodb_open_files = 500
# InnoDB使用一个缓冲池来保存索引和原始数据, 不像MyISAM.  
# 这里你设置越大,你在存取表里面数据时所需要的磁盘I/O越少.  
# 在一个独立使用的数据库服务器上,你可以设置这个变量到服务器物理内存大小的70%左右  
# 不要设置过大,否则,由于物理内存的竞争可能导致操作系统的换页颠簸.  
innodb_buffer_pool_size = 592M

# innodb使用后台线程处理数据页上的读写 I/O(输入输出)请求,根据你的 CPU 核数来更改,默认是4  
# 注:这两个参数不支持动态改变,需要把该参数加入到my.cnf里，修改完后重启MySQL服务,允许值的范围从 1-64  
innodb_write_io_threads = 4
innodb_read_io_threads = 4

# 默认设置为 0,表示不限制并发数，这里推荐设置为0，更好去发挥CPU多核处理能力，提高并发量  
innodb_thread_concurrency = 0
innodb_purge_threads = 1
innodb_flush_log_at_trx_commit = 1
innodb_log_buffer_size = 2M
innodb_log_file_size = 64M
innodb_log_files_in_group = 3
innodb_max_dirty_pages_pct = 90
innodb_lock_wait_timeout = 120
innodb_additional_mem_pool_size = 2M
bulk_insert_buffer_size = 8M
# 用于设置在 REPAIR TABLE 和 CREATE INDEX 创建索引或 ALTER TABLE 的过程中排序索引所分配的缓冲区大小，可设置范围：4MB~4GB，默认8MB，4G内存的服务器可以设置为32M~64M
myisam_sort_buffer_size = 8M
# 32位系统默认值是2147483648=2G，64位系统，默认值是9223372036854775807，单位是bytes.
myisam_max_sort_file_size = 100G
myisam_repair_threads = 1

# 服务器关闭交互式连接前等待活动的秒数。单位秒
interactive_timeout = 28800
# 服务器关闭非交互连接之前等待活动的秒数。单位秒。通过show processlist命令查看当前系统的连接状态，如果发现有大量的sleep状态的连接进程，则说明该参数设置的过大。默认值:28800 
wait_timeout = 3600

# ============================================================================================================

[mysqldump]
quick
# 服务器发送和接受的最大包长度
max_allowed_packet = 16M

[myisamchk]
key_buffer_size = 8M
sort_buffer_size = 8M
read_buffer = 4M
write_buffer = 4M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cnf line-numbers-mode" data-ext="cnf"><pre class="language-cnf"><code>
# 适用于 Mysql 5.6
# 该配置适合 1G 内存左右的机子，储存类型为 InnoDB
# 官网配置说明：http://dev.mysql.com/doc/refman/5.6/en/mysqld-option-tables.html
# 官网状态值说明：http://dev.mysql.com/doc/refman/5.6/en/server-status-variables.html
# 官网环境变量说明：http://dev.mysql.com/doc/refman/5.6/en/server-system-variables.html
# 在线生成配置工具：http://tools.percona.com（只是起到一个参考作用，生成的配置文件里面的参数名有的是用符号：-，而官网是用：_，所以这个也要注意改掉。）
# 资料参考：https://blog.linuxeye.com/379.html
# 注释内容为注释行下面的配置的解释
# 这是一个综合配置，不是单独为主库或是从库考虑
# 如果你需要主、从配置可以看：
# 主的配置可以看：https://github.com/judasn/Linux-Tutorial/blob/master/MySQL-Settings/MySQL-5.6/1G-Memory-Machine/my-for-master.cnf
# 从的配置可以看：https://github.com/judasn/Linux-Tutorial/blob/master/MySQL-Settings/MySQL-5.6/1G-Memory-Machine/my-for-salve.cnf

# ============================================================================================================


# 客户端设置
[mysql]
port = 3306
socket = /usr/program/mysql/data/mysql.sock
default-character-set = utf8

# ============================================================================================================


# 服务端设置
[mysqld]
user = mysql
port = 3306
default-storage-engine = InnoDB
socket = /usr/program/mysql/data/mysql.sock
pid-file = /usr/program/mysql/data/mysql.pid

collation-server = utf8_general_ci
init_connect = &#39;SET NAMES utf8&#39;
character-set-server = utf8
basedir = /usr/program/mysql
datadir = /usr/program/mysql/data
log-error = /usr/program/mysql/data/mysql-error.log

# （重点修改）表示是本机的序号为1,一般配合设置主从的时候一定要修改的地方
server-id = 1



# back_log 值指出在 MySQL 暂时停止回答新请求之前的短时间内多少个请求可以被存在堆栈中。如果 MySQL 的连接数据达到 max_connections 时，新来的请求将会被存在堆栈中，以等待某一连接释放资源，该堆栈的数量即 back_log，如果等待连接的数量超过 back_log，将不被授予连接资源。
# 另外，这值（back_log）限于您的操作系统对到来的 TCP/IP 连接的侦听队列的大小。你的操作系统在这个队列大小上有它自己的限制（可以检查你的 OS 文档找出这个变量的最大值），试图设定 back_log 高于你的操作系统的限制将是无效的。  
back_log = 512

# MySQL 的最大并发连接数
max_connections = 1000
# 网络传输中一次小心传输量的最大值（最大值为 1G）；增加该变量的值十分安全，这是因为仅当需要时才会分配额外内存。例如，仅当你发出长查询或 MySQL 必须返回大的结果行时 MySQL 才会分配更多内存。该变量之所以取较小默认值是一种预防措施，以捕获客户端和服务器之间的错误信息包，并确保不会因偶然使用大的信息包而导致内存溢出。  
max_allowed_packet = 16M
# （这个参数有疑问）对于同一主机，如果有超出该参数值个数的中断错误连接，则该主机将被禁止连接。如需对该主机进行解禁，执行 Mysql 命令：FLUSH HOST。
max_connect_errors = 1000000
# 禁止MySQL对外部连接进行DNS解析，使用这一选项可以消除MySQL进行DNS解析的时间。但需要注意，如果开启该选项，则所有远程主机连接授权都要使用IP地址方式，否则MySQL将无法正常处理连接请求 
skip-name-resolve
# MySQL打开的文件描述符限制
open_files_limit = 65535
# MySQL 每打开一个表，都会读入一些数据到 table_open_cache 缓存中，当 MySQL 在这个缓存中找不到相应信息时，才会去磁盘上读取。默认值 400，最大值：524288。假定系统有 200 个并发连接，则需将此参数设置为 200*N (N 为每个连接所需的文件描述符数目)；当把 table_open_cache 设置为很大时，如果系统处理不了那么多文件描述符，那么就会出现客户端失效，连接不上  
table_open_cache = 2048 

# 一个事务，在没有提交的时候，产生的日志，记录到 Cache 中；等到事务提交需要提交的时候，则把日志持久化到磁盘。默认 binlog_cache_size 大小32K
binlog_cache_size = 1M
# 定义了用户可以创建的内存表(memory table)的大小。这个值用来计算内存表的最大行数值。这个变量支持动态改变  
max_heap_table_size = 32M
# MySQL的heap（堆积）表缓冲大小。如果超过该值，则会将临时表写入磁盘。其范围值:1KB~4GB
tmp_table_size = 32M

# MySQL读入缓冲区大小。该参数对应的分配内存也是每连接独享，所以，如果有100连接，那占用的内存是：100X2M=200M，所以4G内存的服务器，建议该值是6~8M
read_buffer_size = 2M
# MySQL的随机读缓冲区大小。
read_rnd_buffer_size = 8M
# MySQL执行排序使用的缓冲大小。该参数对应的分配内存也是每连接独享，所以，如果有100连接，那占用的内存是：100X2M=200M，所以4G内存的服务器，建议该值是6~8M
sort_buffer_size = 2M
# 联合查询操作所能使用的缓冲区大小，和sort_buffer_size一样，该参数对应的分配内存也是每连接独享，所以，如果有100连接，那占用的内存是：100X4M=400M，所以4G内存的服务器，建议该值是6~8M
join_buffer_size = 4M
# 指定用于索引的缓冲区大小，增加它可得到更好处理的索引(对所有读和多重写)，对于4GB内存的服务器，该参数可以设置为：256M或384M
key_buffer_size = 64M
# 这个值（默认8）表示可以重新利用保存在缓存中线程的数量，当断开连接时如果缓存中还有空间，那么客户端的线程将被放到缓存中，  
# 根据物理内存设置规则如下：  
# 1G  —&gt; 8  
# 2G  —&gt; 16  
# 3G  —&gt; 32  
# 大于3G  —&gt; 64  
thread_cache_size = 8

# 每个线程的堆栈大小，值范围：128K ~ 4GB，默认是192KB
thread_stack = 256k

# 0是关闭高速缓存，1是开启高速缓存
query_cache_type = 1
# 查询缓冲区的大小，如果是4G内存建议设置为64M。具体设置值还要根据运行环境来判断，你可以执行这个SQL语句：show status like &#39;Qcache%&#39;;
# 从SQL语句查询的结果中，查看Qcache_lowmem_prunes的值非常大表示查询缓冲不够，你应该增加该设置值
query_cache_size = 8M
query_cache_limit = 2M

# 分词词汇最小长度，默认4  
ft_min_word_len = 4

log-bin = /usr/program/mysql/data/mysql-bin
binlog-format = mixed
expire_logs_days = 30
# 该参数的说明：http://blog.csdn.net/wulantian/article/details/9965905
sync_binlog = 0

# 是否开启慢查询记录，1表示开启，0表示关闭，如果是主从环境下，主库不要开启，从库开启
slow_query_log = 1
# 慢查询时间 超过3秒则为慢查询  
long_query_time = 3
slow_query_log_file = /usr/program/mysql/data/mysql-slow.log  

performance_schema = 0
# 改参数的说明：http://www.cnblogs.com/digdeep/p/4727715.html
explicit_defaults_for_timestamp = true

# 数据库库名/表名是否区分大小写，0：区分大小写，1：不区分大小写
lower_case_table_names = 1

# MySQL选项以避免外部锁定，减少出错几率，增强稳定性
skip_external_locking


# 在网络上不允许TCP/IP连接到MySQL。所有到MySQL的连接必须经由Unix socket进行。如果要允许TCP/IP连接，则注释当前行即可
# skip-networking


table_definition_cache = 1024

# 该设置值取值为：服务器机子的逻辑CPU数量X2，比如你的服务器机子是 Linux 系统你可以执行：grep &#39;processor&#39; /proc/cpuinfo | sort -u | wc -l，可以查看到逻辑CPU数量值，比如我取到的值是24，那我这里应该设置为：24X2=48
thread_concurrency = 2

# 强制为 innodb类型
innodb = FORCE
innodb_file_per_table = 1
# 限制Innodb能打开的表的数据，如果库里的表特别多的情况，请增加这个。这个值默认是300  
innodb_open_files = 500
# InnoDB使用一个缓冲池来保存索引和原始数据, 不像MyISAM.  
# 这里你设置越大,你在存取表里面数据时所需要的磁盘I/O越少.  
# 在一个独立使用的数据库服务器上,你可以设置这个变量到服务器物理内存大小的70%左右  
# 不要设置过大,否则,由于物理内存的竞争可能导致操作系统的换页颠簸.  
innodb_buffer_pool_size = 592M

# innodb使用后台线程处理数据页上的读写 I/O(输入输出)请求,根据你的 CPU 核数来更改,默认是4  
# 注:这两个参数不支持动态改变,需要把该参数加入到my.cnf里，修改完后重启MySQL服务,允许值的范围从 1-64  
innodb_write_io_threads = 4
innodb_read_io_threads = 4

# 默认设置为 0,表示不限制并发数，这里推荐设置为0，更好去发挥CPU多核处理能力，提高并发量  
innodb_thread_concurrency = 0
innodb_purge_threads = 1
innodb_flush_log_at_trx_commit = 1
innodb_log_buffer_size = 2M
innodb_log_file_size = 64M
innodb_log_files_in_group = 3
innodb_max_dirty_pages_pct = 90
innodb_lock_wait_timeout = 120
innodb_additional_mem_pool_size = 2M
bulk_insert_buffer_size = 8M
# 用于设置在 REPAIR TABLE 和 CREATE INDEX 创建索引或 ALTER TABLE 的过程中排序索引所分配的缓冲区大小，可设置范围：4MB~4GB，默认8MB，4G内存的服务器可以设置为32M~64M
myisam_sort_buffer_size = 8M
# 32位系统默认值是2147483648=2G，64位系统，默认值是9223372036854775807，单位是bytes.
myisam_max_sort_file_size = 100G
myisam_repair_threads = 1

# 服务器关闭交互式连接前等待活动的秒数。单位秒
interactive_timeout = 28800
# 服务器关闭非交互连接之前等待活动的秒数。单位秒。通过show processlist命令查看当前系统的连接状态，如果发现有大量的sleep状态的连接进程，则说明该参数设置的过大。默认值:28800 
wait_timeout = 3600

# ============================================================================================================

[mysqldump]
quick
# 服务器发送和接受的最大包长度
max_allowed_packet = 16M

[myisamchk]
key_buffer_size = 8M
sort_buffer_size = 8M
read_buffer = 4M
write_buffer = 4M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql-8g" tabindex="-1"><a class="header-anchor" href="#mysql-8g" aria-hidden="true">#</a> mysql-8g</h2><div class="language-cnf line-numbers-mode" data-ext="cnf"><pre class="language-cnf"><code>[mysql]
port = 3306
socket = /usr/program/mysql/data/mysql.sock
default-character-set = utf8

[mysqld]
user = mysql
port = 3306
server-id = 100866
default-storage-engine = InnoDB
socket = /usr/program/mysql/data/mysql.sock
pid-file = /usr/program/mysql/data/mysql.pid
collation-server = utf8_general_ci
init_connect = &#39;SET NAMES utf8&#39;
character-set-server = utf8
basedir = /usr/program/mysql
datadir = /usr/program/mysql/data
log-error = /usr/program/mysql/data/mysql-error.log

back_log = 512
max_connections = 1000
max_allowed_packet = 120M
max_connect_errors = 1000000
skip-name-resolve
open_files_limit = 65535
table_open_cache = 2048 
binlog_cache_size = 20M
max_heap_table_size = 40M
tmp_table_size = 64M
read_buffer_size = 20M
read_rnd_buffer_size = 20M
sort_buffer_size = 20M
join_buffer_size = 20M
key_buffer_size = 40M
thread_cache_size = 100
thread_stack = 20M

# 5.6.8之后这个不再建议开启了，所以要关掉
query_cache_type = 0
query_cache_size = 40M
query_cache_limit = 10M
ft_min_word_len = 4
log-bin = /usr/program/mysql/data/mysql-bin
binlog-format = mixed
expire_logs_days = 14
sync_binlog = 0
log-queries-not-using-indexes = 1
slow_query_log = 0
long_query_time = 3
slow_query_log_file = /usr/program/mysql/data/mysql-slow.log  
performance_schema = 0
explicit_defaults_for_timestamp = true
lower_case_table_names = 1
skip_external_locking
table_definition_cache = 1024
thread_concurrency = 2
innodb = FORCE
innodb_flush_method = O_DIRECT
innodb_file_per_table = 1
innodb_open_files = 500
innodb_thread_concurrency = 0
innodb_purge_threads = 1
innodb_flush_log_at_trx_commit = 1
innodb_log_buffer_size = 20M
innodb_log_file_size = 256M
innodb_log_files_in_group = 2
innodb_lock_wait_timeout = 120
innodb_additional_mem_pool_size = 20M


innodb_buffer_pool_size = 3G
innodb_read_io_threads = 8
innodb_write_io_threads = 8
innodb_io_capacity = 2000
innodb_max_dirty_pages_pct = 90

bulk_insert_buffer_size = 64M
myisam_sort_buffer_size = 64M
myisam_max_sort_file_size = 10G
myisam_repair_threads = 1
interactive_timeout = 28800
wait_timeout = 3600

[mysqldump]
quick
max_allowed_packet = 120M

[myisamchk]
key_buffer_size = 20M
sort_buffer_size = 20M
read_buffer = 20M
write_buffer = 20M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql-windows" tabindex="-1"><a class="header-anchor" href="#mysql-windows" aria-hidden="true">#</a> mysql-windows</h2><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">client</span><span class="token punctuation">]</span></span>
no-beep
<span class="token key attr-name">port</span><span class="token punctuation">=</span><span class="token value attr-value">3306</span>


<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysql</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">default-character-set</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">port</span><span class="token punctuation">=</span><span class="token value attr-value">3306</span>
<span class="token key attr-name">basedir</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">C:/Program Files/MySQL/MySQL Server 5.6/</span>&quot;</span>
<span class="token key attr-name">datadir</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">C:/ProgramData/MySQL/MySQL Server 5.6/data\\</span>&quot;</span>
<span class="token key attr-name">character-set-server</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>
<span class="token key attr-name">default-storage-engine</span><span class="token punctuation">=</span><span class="token value attr-value">INNODB</span>
<span class="token key attr-name">sql-mode</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION</span>&quot;</span>
<span class="token key attr-name">log-output</span><span class="token punctuation">=</span><span class="token value attr-value">NONE</span>
<span class="token key attr-name">general-log</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">general_log_file</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">AJBC-1540.log</span>&quot;</span>
<span class="token key attr-name">slow-query-log</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">slow_query_log_file</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">AJBC-1540-slow.log</span>&quot;</span>
<span class="token key attr-name">long_query_time</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>
<span class="token key attr-name">log-error</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">AJBC-1540.err</span>&quot;</span>
<span class="token key attr-name">max_connections</span><span class="token punctuation">=</span><span class="token value attr-value">1000</span>
<span class="token key attr-name">query_cache_size</span><span class="token punctuation">=</span><span class="token value attr-value">10M</span>
<span class="token key attr-name">table_open_cache</span><span class="token punctuation">=</span><span class="token value attr-value">2000</span>
<span class="token key attr-name">tmp_table_size</span><span class="token punctuation">=</span><span class="token value attr-value">37M</span>
<span class="token key attr-name">thread_cache_size</span><span class="token punctuation">=</span><span class="token value attr-value">32</span>
<span class="token key attr-name">myisam_max_sort_file_size</span><span class="token punctuation">=</span><span class="token value attr-value">100G</span>
<span class="token key attr-name">myisam_sort_buffer_size</span><span class="token punctuation">=</span><span class="token value attr-value">72M</span>
<span class="token key attr-name">key_buffer_size</span><span class="token punctuation">=</span><span class="token value attr-value">256M</span>
<span class="token key attr-name">read_buffer_size</span><span class="token punctuation">=</span><span class="token value attr-value">6M</span>
<span class="token key attr-name">read_rnd_buffer_size</span><span class="token punctuation">=</span><span class="token value attr-value">8M</span>
<span class="token key attr-name">sort_buffer_size</span><span class="token punctuation">=</span><span class="token value attr-value">2M</span>
<span class="token key attr-name">innodb_additional_mem_pool_size</span><span class="token punctuation">=</span><span class="token value attr-value">5M</span>
<span class="token key attr-name">innodb_flush_log_at_trx_commit</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">innodb_log_buffer_size</span><span class="token punctuation">=</span><span class="token value attr-value">3M</span>
<span class="token key attr-name">innodb_buffer_pool_size</span><span class="token punctuation">=</span><span class="token value attr-value">592M</span>
<span class="token key attr-name">innodb_log_file_size</span><span class="token punctuation">=</span><span class="token value attr-value">64M</span>
<span class="token key attr-name">innodb_thread_concurrency</span><span class="token punctuation">=</span><span class="token value attr-value">9</span>
<span class="token key attr-name">innodb_autoextend_increment</span><span class="token punctuation">=</span><span class="token value attr-value">64M</span>
<span class="token key attr-name">innodb_buffer_pool_instances</span><span class="token punctuation">=</span><span class="token value attr-value">8</span>
<span class="token key attr-name">innodb_concurrency_tickets</span><span class="token punctuation">=</span><span class="token value attr-value">5000</span>
<span class="token key attr-name">innodb_old_blocks_time</span><span class="token punctuation">=</span><span class="token value attr-value">1000</span>
<span class="token key attr-name">innodb_open_files</span><span class="token punctuation">=</span><span class="token value attr-value">500</span>
<span class="token key attr-name">innodb_stats_on_metadata</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">innodb_file_per_table</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">innodb_checksum_algorithm</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">back_log</span><span class="token punctuation">=</span><span class="token value attr-value">512</span>
<span class="token key attr-name">flush_time</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">join_buffer_size</span><span class="token punctuation">=</span><span class="token value attr-value">4M</span>
<span class="token key attr-name">max_allowed_packet</span><span class="token punctuation">=</span><span class="token value attr-value">50M</span>
<span class="token key attr-name">max_connect_errors</span><span class="token punctuation">=</span><span class="token value attr-value">1000000</span>
<span class="token key attr-name">open_files_limit</span><span class="token punctuation">=</span><span class="token value attr-value">65535</span>
<span class="token key attr-name">query_cache_type</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">table_definition_cache</span><span class="token punctuation">=</span><span class="token value attr-value">1400</span>
<span class="token key attr-name">binlog_row_event_max_size</span><span class="token punctuation">=</span><span class="token value attr-value">8K</span>
<span class="token key attr-name">sync_master_info</span><span class="token punctuation">=</span><span class="token value attr-value">10000</span>
<span class="token key attr-name">sync_relay_log</span><span class="token punctuation">=</span><span class="token value attr-value">10000</span>
<span class="token key attr-name">sync_relay_log_info</span><span class="token punctuation">=</span><span class="token value attr-value">10000</span>
<span class="token key attr-name">innodb_write_io_threads</span> <span class="token punctuation">=</span> <span class="token value attr-value">4</span>
<span class="token key attr-name">innodb_read_io_threads</span> <span class="token punctuation">=</span> <span class="token value attr-value">4</span>
<span class="token key attr-name">innodb_purge_threads</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token key attr-name">innodb_log_files_in_group</span> <span class="token punctuation">=</span> <span class="token value attr-value">3</span>
<span class="token key attr-name">innodb_max_dirty_pages_pct</span> <span class="token punctuation">=</span> <span class="token value attr-value">90</span>
<span class="token key attr-name">innodb_lock_wait_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">120</span>
<span class="token key attr-name">max_heap_table_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">32M</span>
<span class="token key attr-name">thread_stack</span> <span class="token punctuation">=</span> <span class="token value attr-value">256k</span>
<span class="token key attr-name">ft_min_word_len</span> <span class="token punctuation">=</span> <span class="token value attr-value">4</span>
<span class="token key attr-name">performance_schema</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
<span class="token key attr-name">explicit_defaults_for_timestamp</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
skip_external_locking
<span class="token key attr-name">bulk_insert_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">8M</span>
<span class="token key attr-name">wait_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">3600</span>
<span class="token key attr-name">interactive_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">28800</span>
<span class="token key attr-name">myisam_repair_threads</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token key attr-name">query_cache_limit</span> <span class="token punctuation">=</span> <span class="token value attr-value">5M</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),d=[l];function v(r,c){return s(),e("div",null,d)}const t=n(a,[["render",v],["__file","mysql-1g.html.vue"]]);export{t as default};
