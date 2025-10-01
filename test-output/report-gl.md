# Test Garden Linux Results

## Test Summary

Ran 24337 tests in 1h 43m 22s
| Result | Amount |
| --- | --- |
| 🟢 passed | 10742 (44.1%) |
| 🟡 skipped | 13589 (55.8%) |
| 🔴 failed | 1 (0.0%) |
| 🔴 error | 5 (0.0%) |

## Test Results

| Artifact | Type | Namespace | Total | 🟢 Passed | 🟡 Skipped | 🔴 Failed | 🔴 Error | Duration |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 🟢 ali-gardener_prod-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 ali-gardener_prod-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 29s |
| 🟢 ali-gardener_prod-amd64 | cloud | test-ng | 57 | 42 | 15 | 0 | 0 | 9s |
| 🔴 ali-gardener_prod-amd64-2010.0-6f7a7b19.platform.test.xml | - | - | 187 | 87 | 99 | 0 | <a href="#suite-ali-gardenerprod-amd64-20100-6f7a7b19platformtestxml-error">1</a> | 1m 23s |
| 🟢 ali-gardener_prod-amd64 | qemu | test-ng | 57 | 41 | 16 | 0 | 0 | 32s |
| 🟢 aws-gardener_prod-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 aws-gardener_prod-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 33s |
| 🟢 aws-gardener_prod-amd64 | cloud | test-ng | 57 | 42 | 15 | 0 | 0 | 10s |
| 🟢 aws-gardener_prod-amd64 | platform | test | 184 | 89 | 95 | 0 | 0 | 1m 33s |
| 🟢 aws-gardener_prod-amd64 | qemu | test-ng | 57 | 41 | 16 | 0 | 0 | 32s |
| 🟢 aws-gardener_prod-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 aws-gardener_prod-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 28s |
| 🟢 aws-gardener_prod-arm64 | cloud | test-ng | 57 | 42 | 15 | 0 | 0 | 10s |
| 🟢 aws-gardener_prod-arm64 | platform | test | 184 | 89 | 95 | 0 | 0 | 1m 34s |
| 🟢 aws-gardener_prod-arm64 | qemu | test-ng | 57 | 41 | 16 | 0 | 0 | 30s |
| 🟢 aws-gardener_prod_tpm2_trustedboot-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 aws-gardener_prod_tpm2_trustedboot-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 29s |
| 🟢 aws-gardener_prod_tpm2_trustedboot-amd64 | cloud | test-ng | 57 | 42 | 15 | 0 | 0 | 9s |
| 🟢 aws-gardener_prod_tpm2_trustedboot-amd64 | platform | test | 184 | 89 | 95 | 0 | 0 | 1m 31s |
| 🟢 aws-gardener_prod_tpm2_trustedboot-amd64 | qemu | test-ng | 57 | 41 | 16 | 0 | 0 | 33s |
| 🟢 aws-gardener_prod_tpm2_trustedboot-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 aws-gardener_prod_tpm2_trustedboot-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 29s |
| 🟢 aws-gardener_prod_tpm2_trustedboot-arm64 | cloud | test-ng | 57 | 42 | 15 | 0 | 0 | 9s |
| 🟢 aws-gardener_prod_tpm2_trustedboot-arm64 | platform | test | 184 | 89 | 95 | 0 | 0 | 1m 32s |
| 🟢 aws-gardener_prod_tpm2_trustedboot-arm64 | qemu | test-ng | 57 | 41 | 16 | 0 | 0 | 34s |
| 🟢 aws-gardener_prod_trustedboot-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 aws-gardener_prod_trustedboot-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 29s |
| 🔴 aws-gardener_prod_trustedboot-amd64-2010.0-6f7a7b19.cloud.test-ng.xml | - | - | 2 | 0 | 0 | 0 | <a href="#suite-aws-gardenerprodtrustedboot-amd64-20100-6f7a7b19cloudtest-ngxml-error">2</a> | 0s |
| 🟢 aws-gardener_prod_trustedboot-amd64 | platform | test | 184 | 89 | 95 | 0 | 0 | 1m 34s |
| 🟢 aws-gardener_prod_trustedboot-amd64 | qemu | test-ng | 57 | 41 | 16 | 0 | 0 | 35s |
| 🟢 aws-gardener_prod_trustedboot-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 aws-gardener_prod_trustedboot-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 29s |
| 🔴 aws-gardener_prod_trustedboot-arm64-2010.0-6f7a7b19.cloud.test-ng.xml | - | - | 2 | 0 | 0 | 0 | <a href="#suite-aws-gardenerprodtrustedboot-arm64-20100-6f7a7b19cloudtest-ngxml-error">2</a> | 0s |
| 🟢 aws-gardener_prod_trustedboot-arm64 | platform | test | 184 | 89 | 95 | 0 | 0 | 1m 28s |
| 🟢 aws-gardener_prod_trustedboot-arm64 | qemu | test-ng | 57 | 41 | 16 | 0 | 0 | 31s |
| 🟢 aws-gardener_prod_usi-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 aws-gardener_prod_usi-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 30s |
| 🟢 aws-gardener_prod_usi-amd64 | cloud | test-ng | 57 | 42 | 15 | 0 | 0 | 9s |
| 🟢 aws-gardener_prod_usi-amd64 | platform | test | 184 | 89 | 95 | 0 | 0 | 1m 24s |
| 🟢 aws-gardener_prod_usi-amd64 | qemu | test-ng | 57 | 41 | 16 | 0 | 0 | 31s |
| 🟢 aws-gardener_prod_usi-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 aws-gardener_prod_usi-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 27s |
| 🟢 aws-gardener_prod_usi-arm64 | cloud | test-ng | 57 | 42 | 15 | 0 | 0 | 9s |
| 🟢 aws-gardener_prod_usi-arm64 | platform | test | 184 | 89 | 95 | 0 | 0 | 1m 48s |
| 🟢 aws-gardener_prod_usi-arm64 | qemu | test-ng | 57 | 41 | 16 | 0 | 0 | 35s |
| 🟢 azure-gardener_prod-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 azure-gardener_prod-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 29s |
| 🟢 azure-gardener_prod-amd64 | cloud | test-ng | 57 | 42 | 15 | 0 | 0 | 34s |
| 🟢 azure-gardener_prod-amd64 | platform | test | 184 | 89 | 95 | 0 | 0 | 2m 9s |
| 🟢 azure-gardener_prod-amd64 | qemu | test-ng | 57 | 42 | 15 | 0 | 0 | 32s |
| 🟢 azure-gardener_prod-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 azure-gardener_prod-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 29s |
| 🟢 azure-gardener_prod-arm64 | cloud | test-ng | 57 | 42 | 15 | 0 | 0 | 31s |
| 🟢 azure-gardener_prod-arm64 | platform | test | 184 | 89 | 95 | 0 | 0 | 2m 9s |
| 🟢 azure-gardener_prod-arm64 | qemu | test-ng | 57 | 42 | 15 | 0 | 0 | 30s |
| 🟢 azure-gardener_prod_tpm2_trustedboot-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 azure-gardener_prod_tpm2_trustedboot-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 31s |
| 🟢 azure-gardener_prod_tpm2_trustedboot-amd64 | cloud | test-ng | 57 | 42 | 15 | 0 | 0 | 11s |
| 🟢 azure-gardener_prod_tpm2_trustedboot-amd64 | platform | test | 184 | 89 | 95 | 0 | 0 | 1m 29s |
| 🟢 azure-gardener_prod_tpm2_trustedboot-amd64 | qemu | test-ng | 57 | 42 | 15 | 0 | 0 | 36s |
| 🟢 azure-gardener_prod_tpm2_trustedboot-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 azure-gardener_prod_tpm2_trustedboot-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 28s |
| 🟢 azure-gardener_prod_tpm2_trustedboot-arm64 | qemu | test-ng | 57 | 42 | 15 | 0 | 0 | 39s |
| 🟢 azure-gardener_prod_trustedboot-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 azure-gardener_prod_trustedboot-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 29s |
| 🟢 azure-gardener_prod_trustedboot-amd64 | cloud | test-ng | 57 | 42 | 15 | 0 | 0 | 10s |
| 🟢 azure-gardener_prod_trustedboot-amd64 | platform | test | 184 | 89 | 95 | 0 | 0 | 1m 36s |
| 🟢 azure-gardener_prod_trustedboot-amd64 | qemu | test-ng | 57 | 42 | 15 | 0 | 0 | 33s |
| 🟢 azure-gardener_prod_trustedboot-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 azure-gardener_prod_trustedboot-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 29s |
| 🟢 azure-gardener_prod_trustedboot-arm64 | qemu | test-ng | 57 | 42 | 15 | 0 | 0 | 34s |
| 🟢 azure-gardener_prod_usi-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 azure-gardener_prod_usi-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 29s |
| 🟢 azure-gardener_prod_usi-amd64 | cloud | test-ng | 57 | 42 | 15 | 0 | 0 | 11s |
| 🟢 azure-gardener_prod_usi-amd64 | platform | test | 184 | 89 | 95 | 0 | 0 | 1m 46s |
| 🟢 azure-gardener_prod_usi-amd64 | qemu | test-ng | 57 | 42 | 15 | 0 | 0 | 33s |
| 🟢 azure-gardener_prod_usi-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 azure-gardener_prod_usi-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 29s |
| 🟢 azure-gardener_prod_usi-arm64 | qemu | test-ng | 57 | 42 | 15 | 0 | 0 | 31s |
| 🟢 container-amd64 | chroot | test-ng | 57 | 19 | 38 | 0 | 0 | 1s |
| 🟢 container-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 20 | 164 | 0 | 0 | 16s |
| 🟢 container-arm64 | chroot | test-ng | 57 | 19 | 38 | 0 | 0 | 1s |
| 🟢 container-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 20 | 164 | 0 | 0 | 16s |
| 🟢 gcp-gardener_prod-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 gcp-gardener_prod-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 67 | 117 | 0 | 0 | 30s |
| 🟢 gcp-gardener_prod-amd64 | cloud | test-ng | 57 | 41 | 16 | 0 | 0 | 11s |
| 🟢 gcp-gardener_prod-amd64 | platform | test | 184 | 88 | 96 | 0 | 0 | 1m 50s |
| 🟢 gcp-gardener_prod-amd64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 1m 2s |
| 🟢 gcp-gardener_prod-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 gcp-gardener_prod-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 67 | 117 | 0 | 0 | 27s |
| 🟢 gcp-gardener_prod-arm64 | cloud | test-ng | 57 | 41 | 16 | 0 | 0 | 10s |
| 🟢 gcp-gardener_prod-arm64 | platform | test | 184 | 88 | 96 | 0 | 0 | 1m 23s |
| 🟢 gcp-gardener_prod-arm64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 1m 5s |
| 🟢 gcp-gardener_prod_tpm2_trustedboot-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 gcp-gardener_prod_tpm2_trustedboot-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 67 | 117 | 0 | 0 | 29s |
| 🟢 gcp-gardener_prod_tpm2_trustedboot-amd64 | cloud | test-ng | 57 | 41 | 16 | 0 | 0 | 11s |
| 🟢 gcp-gardener_prod_tpm2_trustedboot-amd64 | platform | test | 184 | 88 | 96 | 0 | 0 | 1m 30s |
| 🟢 gcp-gardener_prod_tpm2_trustedboot-amd64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 1m 8s |
| 🟢 gcp-gardener_prod_tpm2_trustedboot-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 gcp-gardener_prod_tpm2_trustedboot-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 67 | 117 | 0 | 0 | 28s |
| 🟢 gcp-gardener_prod_tpm2_trustedboot-arm64 | cloud | test-ng | 57 | 41 | 16 | 0 | 0 | 9s |
| 🔴 gcp-gardener_prod_tpm2_trustedboot-arm64 | platform | test | 184 | 87 | 96 | <a href="#suite-gcp-gardenerprodtpm2trustedboot-arm64-20100-6f7a7b19platformtestxml-failed">1</a> | 0 | 1m 36s |
| 🟢 gcp-gardener_prod_tpm2_trustedboot-arm64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 1m 6s |
| 🟢 gcp-gardener_prod_trustedboot-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 gcp-gardener_prod_trustedboot-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 67 | 117 | 0 | 0 | 28s |
| 🟢 gcp-gardener_prod_trustedboot-amd64 | cloud | test-ng | 57 | 41 | 16 | 0 | 0 | 11s |
| 🟢 gcp-gardener_prod_trustedboot-amd64 | platform | test | 184 | 88 | 96 | 0 | 0 | 1m 34s |
| 🟢 gcp-gardener_prod_trustedboot-amd64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 1m 4s |
| 🟢 gcp-gardener_prod_trustedboot-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 gcp-gardener_prod_trustedboot-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 67 | 117 | 0 | 0 | 30s |
| 🟢 gcp-gardener_prod_trustedboot-arm64 | cloud | test-ng | 57 | 41 | 16 | 0 | 0 | 9s |
| 🟢 gcp-gardener_prod_trustedboot-arm64 | platform | test | 184 | 88 | 96 | 0 | 0 | 1m 38s |
| 🟢 gcp-gardener_prod_trustedboot-arm64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 1m 11s |
| 🟢 gcp-gardener_prod_usi-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 gcp-gardener_prod_usi-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 67 | 117 | 0 | 0 | 29s |
| 🟢 gcp-gardener_prod_usi-amd64 | cloud | test-ng | 57 | 41 | 16 | 0 | 0 | 10s |
| 🟢 gcp-gardener_prod_usi-amd64 | platform | test | 184 | 88 | 96 | 0 | 0 | 1m 32s |
| 🟢 gcp-gardener_prod_usi-amd64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 1m 5s |
| 🟢 gcp-gardener_prod_usi-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 gcp-gardener_prod_usi-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 67 | 117 | 0 | 0 | 28s |
| 🟢 gcp-gardener_prod_usi-arm64 | cloud | test-ng | 57 | 41 | 16 | 0 | 0 | 9s |
| 🟢 gcp-gardener_prod_usi-arm64 | platform | test | 184 | 88 | 96 | 0 | 0 | 1m 36s |
| 🟢 gcp-gardener_prod_usi-arm64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 1m 8s |
| 🟢 gdch-gardener_prod-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 gdch-gardener_prod-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 65 | 119 | 0 | 0 | 28s |
| 🟢 gdch-gardener_prod-amd64 | qemu | test-ng | 57 | 41 | 16 | 0 | 0 | 32s |
| 🟢 gdch-gardener_prod-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 gdch-gardener_prod-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 65 | 119 | 0 | 0 | 27s |
| 🟢 gdch-gardener_prod-arm64 | qemu | test-ng | 57 | 41 | 16 | 0 | 0 | 33s |
| 🟢 kvm-gardener_prod-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 kvm-gardener_prod-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 29s |
| 🟢 kvm-gardener_prod-amd64 | qemu | test-ng | 57 | 41 | 16 | 0 | 0 | 33s |
| 🟢 kvm-gardener_prod-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 kvm-gardener_prod-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 27s |
| 🟢 kvm-gardener_prod-arm64 | qemu | test-ng | 57 | 41 | 16 | 0 | 0 | 30s |
| 🟢 kvm-gardener_prod_tpm2_trustedboot-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 kvm-gardener_prod_tpm2_trustedboot-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 30s |
| 🟢 kvm-gardener_prod_tpm2_trustedboot-amd64 | qemu | test-ng | 57 | 41 | 16 | 0 | 0 | 35s |
| 🟢 kvm-gardener_prod_tpm2_trustedboot-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 kvm-gardener_prod_tpm2_trustedboot-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 27s |
| 🟢 kvm-gardener_prod_tpm2_trustedboot-arm64 | qemu | test-ng | 57 | 41 | 16 | 0 | 0 | 33s |
| 🟢 kvm-gardener_prod_trustedboot-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 kvm-gardener_prod_trustedboot-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 29s |
| 🟢 kvm-gardener_prod_trustedboot-amd64 | qemu | test-ng | 57 | 41 | 16 | 0 | 0 | 33s |
| 🟢 kvm-gardener_prod_trustedboot-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 kvm-gardener_prod_trustedboot-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 29s |
| 🟢 kvm-gardener_prod_trustedboot-arm64 | qemu | test-ng | 57 | 41 | 16 | 0 | 0 | 31s |
| 🟢 kvm-gardener_prod_usi-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 kvm-gardener_prod_usi-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 30s |
| 🟢 kvm-gardener_prod_usi-amd64 | qemu | test-ng | 57 | 41 | 16 | 0 | 0 | 33s |
| 🟢 kvm-gardener_prod_usi-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 kvm-gardener_prod_usi-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 66 | 118 | 0 | 0 | 28s |
| 🟢 kvm-gardener_prod_usi-arm64 | qemu | test-ng | 57 | 41 | 16 | 0 | 0 | 31s |
| 🟢 metal-capi-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 metal-capi-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 60 | 124 | 0 | 0 | 33s |
| 🟢 metal-capi-amd64 | qemu | test-ng | 57 | 36 | 21 | 0 | 0 | 10s |
| 🟢 metal-capi-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 metal-capi-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 60 | 124 | 0 | 0 | 26s |
| 🟢 metal-capi-arm64 | qemu | test-ng | 57 | 36 | 21 | 0 | 0 | 8s |
| 🟢 metal-gardener_prod-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 metal-gardener_prod-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 61 | 123 | 0 | 0 | 29s |
| 🟢 metal-gardener_prod-amd64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 31s |
| 🟢 metal-gardener_prod-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 metal-gardener_prod-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 61 | 123 | 0 | 0 | 27s |
| 🟢 metal-gardener_prod-arm64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 31s |
| 🟢 metal-gardener_prod_tpm2_trustedboot-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 metal-gardener_prod_tpm2_trustedboot-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 61 | 123 | 0 | 0 | 28s |
| 🟢 metal-gardener_prod_tpm2_trustedboot-amd64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 31s |
| 🟢 metal-gardener_prod_tpm2_trustedboot-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 metal-gardener_prod_tpm2_trustedboot-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 61 | 123 | 0 | 0 | 27s |
| 🟢 metal-gardener_prod_tpm2_trustedboot-arm64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 34s |
| 🟢 metal-gardener_prod_trustedboot-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 metal-gardener_prod_trustedboot-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 61 | 123 | 0 | 0 | 28s |
| 🟢 metal-gardener_prod_trustedboot-amd64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 33s |
| 🟢 metal-gardener_prod_trustedboot-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 metal-gardener_prod_trustedboot-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 61 | 123 | 0 | 0 | 26s |
| 🟢 metal-gardener_prod_trustedboot-arm64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 31s |
| 🟢 metal-gardener_prod_usi-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 metal-gardener_prod_usi-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 61 | 123 | 0 | 0 | 29s |
| 🟢 metal-gardener_prod_usi-amd64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 32s |
| 🟢 metal-gardener_prod_usi-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 metal-gardener_prod_usi-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 61 | 123 | 0 | 0 | 29s |
| 🟢 metal-gardener_prod_usi-arm64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 33s |
| 🟢 metal-gardener_pxe-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 metal-gardener_pxe-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 62 | 122 | 0 | 0 | 28s |
| 🟢 metal-gardener_pxe-amd64 | qemu | test-ng | 57 | 38 | 19 | 0 | 0 | 13s |
| 🟢 metal-gardener_pxe-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 metal-gardener_pxe-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 62 | 122 | 0 | 0 | 27s |
| 🟢 metal-gardener_pxe-arm64 | qemu | test-ng | 57 | 38 | 19 | 0 | 0 | 16s |
| 🟢 metal-vhost-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 metal-vhost-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 60 | 124 | 0 | 0 | 25s |
| 🟢 metal-vhost-amd64 | qemu | test-ng | 57 | 36 | 21 | 0 | 0 | 7s |
| 🟢 metal-vhost-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 metal-vhost-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 60 | 124 | 0 | 0 | 25s |
| 🟢 metal-vhost-arm64 | qemu | test-ng | 57 | 36 | 21 | 0 | 0 | 8s |
| 🟢 metal_pxe-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 metal_pxe-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 61 | 123 | 0 | 0 | 28s |
| 🟢 metal_pxe-amd64 | qemu | test-ng | 57 | 36 | 21 | 0 | 0 | 8s |
| 🟢 metal_pxe-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 metal_pxe-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 61 | 123 | 0 | 0 | 28s |
| 🟢 metal_pxe-arm64 | qemu | test-ng | 57 | 36 | 21 | 0 | 0 | 7s |
| 🟢 openstack-gardener_prod-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 openstack-gardener_prod-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 73 | 111 | 0 | 0 | 30s |
| 🟢 openstack-gardener_prod-amd64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 30s |
| 🟢 openstack-gardener_prod-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 openstack-gardener_prod-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 73 | 111 | 0 | 0 | 28s |
| 🟢 openstack-gardener_prod-arm64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 33s |
| 🟢 openstack-gardener_prod_tpm2_trustedboot-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 openstack-gardener_prod_tpm2_trustedboot-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 73 | 111 | 0 | 0 | 31s |
| 🟢 openstack-gardener_prod_tpm2_trustedboot-amd64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 31s |
| 🟢 openstack-gardener_prod_tpm2_trustedboot-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 openstack-gardener_prod_tpm2_trustedboot-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 73 | 111 | 0 | 0 | 29s |
| 🟢 openstack-gardener_prod_tpm2_trustedboot-arm64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 33s |
| 🟢 openstack-gardener_prod_trustedboot-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 openstack-gardener_prod_trustedboot-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 73 | 111 | 0 | 0 | 29s |
| 🟢 openstack-gardener_prod_trustedboot-amd64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 31s |
| 🟢 openstack-gardener_prod_trustedboot-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 openstack-gardener_prod_trustedboot-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 73 | 111 | 0 | 0 | 28s |
| 🟢 openstack-gardener_prod_trustedboot-arm64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 35s |
| 🟢 openstack-gardener_prod_usi-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 openstack-gardener_prod_usi-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 73 | 111 | 0 | 0 | 30s |
| 🟢 openstack-gardener_prod_usi-amd64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 31s |
| 🟢 openstack-gardener_prod_usi-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 openstack-gardener_prod_usi-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 73 | 111 | 0 | 0 | 27s |
| 🟢 openstack-gardener_prod_usi-arm64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 34s |
| 🟢 openstackbaremetal-gardener_prod-amd64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 openstackbaremetal-gardener_prod-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 70 | 114 | 0 | 0 | 30s |
| 🟢 openstackbaremetal-gardener_prod-amd64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 31s |
| 🟢 openstackbaremetal-gardener_prod-arm64 | chroot | test-ng | 57 | 20 | 37 | 0 | 0 | 1s |
| 🟢 openstackbaremetal-gardener_prod-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 70 | 114 | 0 | 0 | 27s |
| 🟢 openstackbaremetal-gardener_prod-arm64 | qemu | test-ng | 57 | 40 | 17 | 0 | 0 | 31s |
| 🟢 vmware-gardener_prod-amd64 | chroot | test-ng | 57 | 28 | 29 | 0 | 0 | 1s |
| 🟢 vmware-gardener_prod-amd64-2010.0-6f7a7b19 | chroot | test | 184 | 74 | 110 | 0 | 0 | 29s |
| 🟢 vmware-gardener_prod-arm64 | chroot | test-ng | 57 | 28 | 29 | 0 | 0 | 1s |
| 🟢 vmware-gardener_prod-arm64-2010.0-6f7a7b19 | chroot | test | 184 | 74 | 110 | 0 | 0 | 28s |

## Test Details

<a id="suite-ali-gardenerprod-amd64-20100-6f7a7b19platformtestxml"></a>


---


### ali-gardener_prod-amd64-2010.0-6f7a7b19.platform.test.xml Details

<a id="suite-ali-gardenerprod-amd64-20100-6f7a7b19platformtestxml-error"></a>
#### error

<details>
<summary><code>ParsingError.metadata-parsing-error</code></summary>



<pre><code>Metadata could not be parsed from XML file</code></pre>
</details>

<a id="suite-aws-gardenerprodtrustedboot-amd64-20100-6f7a7b19cloudtest-ngxml"></a>


---


### aws-gardener_prod_trustedboot-amd64-2010.0-6f7a7b19.cloud.test-ng.xml Details

<a id="suite-aws-gardenerprodtrustedboot-amd64-20100-6f7a7b19cloudtest-ngxml-error"></a>
#### error

<details>
<summary><code>ParsingError.empty-file-error</code></summary>



<pre><code>Skipping empty file</code></pre>
</details>

<details>
<summary><code>ParsingError.metadata-parsing-error</code></summary>



<pre><code>Metadata could not be parsed from XML file</code></pre>
</details>

<a id="suite-aws-gardenerprodtrustedboot-arm64-20100-6f7a7b19cloudtest-ngxml"></a>


---


### aws-gardener_prod_trustedboot-arm64-2010.0-6f7a7b19.cloud.test-ng.xml Details

<a id="suite-aws-gardenerprodtrustedboot-arm64-20100-6f7a7b19cloudtest-ngxml-error"></a>
#### error

<details>
<summary><code>ParsingError.empty-file-error</code></summary>



<pre><code>Skipping empty file</code></pre>
</details>

<details>
<summary><code>ParsingError.metadata-parsing-error</code></summary>



<pre><code>Metadata could not be parsed from XML file</code></pre>
</details>

<a id="suite-gcp-gardenerprodtpm2trustedboot-arm64-20100-6f7a7b19platformtestxml"></a>


---


### gcp-gardener_prod_tpm2_trustedboot-arm64-2010.0-6f7a7b19.platform.test.xml Details

<a id="suite-gcp-gardenerprodtpm2trustedboot-arm64-20100-6f7a7b19platformtestxml-failed"></a>
#### failed

<details>
<summary><code>base.test.test_network.test_ping4[heise.de]</code></summary>



<pre><code>client = &lt;helper.sshclient.RemoteClient object at 0x7fbf99088590&gt;
ping4_host = 'heise.de', non_provisioner_chroot = None
non_provisioner_qemu = None

    def test_ping4(client, ping4_host, non_provisioner_chroot, non_provisioner_qemu):
        """ Test if destination by fixture in pingable (IPv4) """
        command = f"ping -c 5 -W 5 {ping4_host}"
        (exit_code, output, error) = client.execute_command(command)
        assert exit_code == 0, f'no {error=} expected when executing "{command}"'
&gt;       assert "5 packets transmitted, 5 received, 0% packet loss" in output
E       AssertionError: assert '5 packets transmitted, 5 received, 0% packet loss' in 'PING heise.de (193.99.144.80) 56(84) bytes of data.\n64 bytes from redirector.heise.de (193.99.144.80): icmp_seq=1 ttl=252 time=10.9 ms\n64 bytes from redirector.heise.de (193.99.144.80): icmp_seq=2 ttl=252 time=11.8 ms\n64 bytes from redirector.heise.de (193.99.144.80): icmp_seq=4 ttl=252 time=21.0 ms\n64 bytes from redirector.heise.de (193.99.144.80): icmp_seq=5 ttl=252 time=17.4 ms\n\n--- heise.de ping statistics ---\n5 packets transmitted, 4 received, 20% packet loss, time 4018ms\nrtt min/avg/max/mdev = 10.940/15.282/21.033/4.139 ms\n'

client     = &lt;helper.sshclient.RemoteClient object at 0x7fbf99088590&gt;
command    = 'ping -c 5 -W 5 heise.de'
error      = ''
exit_code  = 0
non_provisioner_chroot = None
non_provisioner_qemu = None
output     = ('PING heise.de (193.99.144.80) 56(84) bytes of data.\n'
 '64 bytes from redirector.heise.de (193.99.144.80): icmp_seq=1 ttl=252 '
 'time=10.9 ms\n'
 '64 bytes from redirector.heise.de (193.99.144.80): icmp_seq=2 ttl=252 '
 'time=11.8 ms\n'
 '64 bytes from redirector.heise.de (193.99.144.80): icmp_seq=4 ttl=252 '
 'time=21.0 ms\n'
 '64 bytes from redirector.heise.de (193.99.144.80): icmp_seq=5 ttl=252 '
 'time=17.4 ms\n'
 '\n'
 '--- heise.de ping statistics ---\n'
 '5 packets transmitted, 4 received, 20% packet loss, time 4018ms\n'
 'rtt min/avg/max/mdev = 10.940/15.282/21.033/4.139 ms\n')
ping4_host = 'heise.de'

../features/base/test/test_network.py:31: AssertionError</code></pre>
</details>

