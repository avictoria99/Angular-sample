mount -t nfs -o rw 172.31.5.82:/mnt/array1/gold_archive /gold_archive
rsync -rltzuv /backup/ILA/* /gold_archive
umount /gold_archive
